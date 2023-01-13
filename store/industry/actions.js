import axios from "axios";

export default {
  async fetchIndustries({ state, commit }, { term }) {
    let industries = null;
    const config = {
      headers: {
        Accept: "application/json",
      },
    };
    const api = axios.create({
      withCredentials: false,
      headers: {
        Accept: "application/json",
      }
    });
    try {
      let res = null;
      if (term === '')
        res = await api.get("https://icanhazdadjoke.com/search", config);
      else
        res = await api.get(`https://icanhazdadjoke.com/search?term=${term}`, config);
      industries = res.data.results
    } catch (err) {
      console.log(err);
    }
    commit('set_data', { industries });
    return industries;
  }
}