const axios = require("axios")

const aliPath =
  "https://1666758333212928.cn-zhangjiakou.fc.aliyuncs.com/2016-08-15/proxy/fun_airtable/fun_airtable/"

export function action_saveMobile_post(mobile) {
  axios
    .post(aliPath, { mobile: mobile })
    .then(function (res) {
      console.log(res)
    })
    .catch(function (error) {
      console.error(error)
    })
}

export async function action_saveMobile_get(mobile) {
  try {
    const response = await axios.get(aliPath + "?mobile=" + mobile)
    console.log(response)
  } catch (error) {
    console.error(error)
  }
}
