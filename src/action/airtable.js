import lodashFp from "lodash/fp"

const axios = require("axios")

const mobile_insert =
  "https://1666758333212928.cn-zhangjiakou.fc.aliyuncs.com/2016-08-15/proxy/fun_airtable/fun_mobile/"
const blog_top3 =
  "https://1666758333212928.cn-zhangjiakou.fc.aliyuncs.com/2016-08-15/proxy/fun_airtable/fun_blog_top3/"
const blog_detail =
  "https://1666758333212928.cn-zhangjiakou.fc.aliyuncs.com/2016-08-15/proxy/fun_airtable/fun_blog_detail/"
const blog_page =
  "https://1666758333212928.cn-zhangjiakou.fc.aliyuncs.com/2016-08-15/proxy/fun_airtable/fun_blog_page/"
  const blog_count =
  "https://1666758333212928.cn-zhangjiakou.fc.aliyuncs.com/2016-08-15/proxy/fun_airtable/fun_blog_count/"

export async function action_saveMobile_get(mobile) {
  try {
    const response = await axios.get(mobile_insert + "?mobile=" + mobile)
    console.log(response)
  } catch (error) {
    console.error(error)
  }
}

export async function action_blog_gettop3() {
  let result = []
  try {
    const response = await axios.get(blog_top3)
    if (response && !lodashFp.isNull(response.data)) {
      result = response.data
    }
  } catch (error) {
    console.error(error)
  }
  return result
}

export async function action_blog_page(pagecount) {
  let result = []
  try {
    const response = await axios.get(blog_page + "?pagecount=" + pagecount)
    //console.log(response)
    if (response && !lodashFp.isNull(response.data)) {
      result = response.data
    }
  } catch (error) {
    console.error(error)
  }
  return result
}

export async function action_blog_count() {
  let result = []
  try {
    const response = await axios.get(blog_count)
    //console.log(response)
    if (response && !lodashFp.isNull(response.data)) {
      result = response.data
    }
  } catch (error) {
    console.error(error)
  }
  return result
}

export async function action_blog_getdetail(id) {
  let result = null
  try {
    const response = await axios.get(blog_detail + "?id=" + id)
    if (response && !lodashFp.isNull(response.data)) {
      result = response.data
    }
  } catch (error) {
    console.error(error)
  }
  return result
}
