"use strict";
const axios = require("axios");
const cheerio = require("cheerio");
const dayjs = require("dayjs");
/**
 * website service
 */

module.exports = () => ({
  async getWeather(cityName) {
    const key = "3f66491764ce4d228270add883cd9b0a";
    return axios
      .get(
        `https://geoapi.qweather.com/v2/city/lookup?location=${cityName}&key=${key}`
      )
      .then(async (res) => {
        let location = res.data.location[0].id;
        let [weather, air] = await Promise.all([
          axios.get(
            `https://devapi.qweather.com/v7/weather/now?location=${location}&key=${key}`
          ),
          axios.get(
            `https://devapi.qweather.com/v7/air/now?location=${location}&key=${key}`
          ),
        ]);
        let html = await axios.get(weather.data.fxLink);
        let $ = cheerio.load(html.data);
        let abs = $(".current-abstract").text();
        weather.data.now.abstract = abs.split("\n")[1];
        return { weather: weather.data.now, air: air.data.now };
      })
      .catch((err) => {
        return err;
      });
  },
  async getViews(days) {
    let today = dayjs().startOf('day')
    let timeArray = [];
    for (let i = days - 1; i >= 0; i--) {
      timeArray.push(today.subtract(i, 'day').valueOf());
    }
    const promises = timeArray.map((item) => {
      return strapi.db.query('api::log.log').findOne({
        select: ['date', 'views'],
        where: { date: item },
      }).then((entry) => {
        if (entry) {
          entry.date = dayjs(entry.date).format("YYYY-MM-DD")
          return entry;
        } else {
          return { "date": dayjs(item).format("YYYY-MM-DD"), views: 0 };
        }
      });
    });

    const result = await Promise.all(promises);
    return result;
  },
  async updateViews() {
    let today = dayjs().startOf('day').valueOf()
    return strapi.db.query('api::log.log').findOne({
      select: ['date', 'views'],
      where: { date: today },
    }).then(async (entry) => {

      if (entry) {
        let views = entry.views + 1
        let result = await strapi.db.query('api::log.log').update({
          where: { date: today },
          data: {
            views: views
          }
        })
        console.log(result)
      } else {
        strapi.db.query('api::log.log').create({
          data: {
            date: today,
            views: 0
          }
        })
      }
      return {}
    })
  }
});
