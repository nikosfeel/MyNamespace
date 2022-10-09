import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    authenticated:false,
    toDoItems: [],
    doneItems: [],
    cards: [
      {
        image:'https://post.healthline.com/wp-content/uploads/2022/02/woman_reading_in_grass_outside-1200x628-facebook-1200x628.jpg',
        title: 'Trajectories of depressive symptoms in older adults and associated health outcomes - Nature.com',
        description: 'This study investigated trajectories of depressive symptoms associated with several health conditions using a sample of over 19,000 older adults. The presence of depressive symptoms was associated with poor health prognosis and increased mortality.'
      },
      {
        image: "http://ichef.bbci.co.uk/news/976/cpsprodpb/FACE/production/_125860246_whatsubject.jpg",
        title: "Elon Musk Slams The Rings of Power for Making Every Male Character a Coward or Jerk, Reigniting Jeff Bezos Feud",
        description: "Elon Musk has reignited his longstanding rivalry with Amazon founder and executive chairman Jeff Bezos, this time over Amazons buzzy new series “The Lord of the Rings: The Rings of Power.” The first two episodes of “The Rings of Power” debuted Sept. 2 on Pri…",
      },
      {
        image: "https://image.cnbcfm.com/api/v1/image/107114117-1662477628431-trad.jpg?v=1662477646&w=1920&h=1080",
        title: "Stock futures lower after another day of losses amid a surge in Treasury yields - CNBC",
        description: "Stock futures were slightly lower Wednesday morning after the major averages added to weeks of losses amid a jump in bond yields.  \r\nFutures tied to the Dow Jones Industrial Average were lower by 115… [+1720 chars]",
      },
      {
        image: "https://image.cnbcfm.com/api/v1/image/106629916-1595528838886-gettyimages-1195292757-AFP_1O5272.jpeg?v=1617646754&w=1920&h=1080",
        title: "Asia-Pacific markets open lower; China's trade data misses expectations - CNBC",
        description: "China's exports grew 7.1% in August from a year earlier, missing estimates of 12.8% forecasted in a Reuters poll, after growing 18% in July.",
      },
      {
        image: "https://i.ytimg.com/vi/130BFE8nPDA/hqdefault.jpg",
        title: "Cyrus Mistry Funeral : Ratan Tata's Stepmother, Simone Tata Attends Cyrus Mistry's Funeral In Worli - India Today",
        description: "Mumbai: Cyrus Mistry, the former Tata Sons chairman who was killed in a road accident earlier this week, was cremated in the financial capital on Tuesday.The...",
      },
      {
        image: "https://www.reuters.com/resizer/BVI74dwhuOOThYRt19WmX_73Fyc=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/OWZJ6RBQ7ZIGLADQATLXJGFT5Q.jpg",
        title: "Apple to appeal Brazil sales ban of iPhone without charger - Reuters",
        description: "Apple Inc said on Tuesday it will appeal a Brazilian order banning it from selling iPhones without a battery charger, pushing back on claims that the company provides an incomplete…",
      },
    ],
    playground:{
      text:"Once Upon A Time"
    },
    user: {
      properties: {
        name: {
          propName: "Name",
          myName: "",
          edit: true,
        },
        surname: {
          propName: "Surname",
          myName: "",
          edit: true,
        },
        description: {
          propName: "Email",
          myName: "",
          edit: true,
        },
        age: {
          propName: "Age",
          myName: "",
          edit: true,
        },
        picture:{
          propName:"Picture",
          myName: "",
          edit: true,
        }
      },
    },
    nobels: [],
    comments: [
      {
        title: "Create an image loading placeholder in nuxtJS",
        name: "Teri",
        body: `In today's world, where optimization and loading time is crucial for
          websites, loading placeholders are developed to improve the waiting
          experience of users on a webpage. This article will discuss how to
          create a loading placeholder image that shows a lightweight version of
          an image, whether pixelated, blurry etc., before the target or
          original image is displayed. We will be using NuxtJS, an open-source
          front-end framework built on top of Vue that features file-system
          routing, and it delivers both static-site generation (SSG) and
          on-demand server rendering.`,
        date: "March 26, 2022",
      }
    ],
    userApi: {},
  },
  getters: {},
  mutations: {
    setNobels(state, data) {
      state.nobels = data;
    },
    setUser(state,data){
      let name = data.results[0].name.first;
      let surName = data.results[0].name.last
      let email = data.results[0].email;
      let age = data.results[0].dob.age;
      state.user.properties.name.myName = name;
      state.user.properties.description.myName = email;
      state.user.properties.age.myName = age;
      state.user.properties.surname.myName = surName;
      state.user.properties.picture.myName = data.results[0].picture.large;
    },
  },
  actions: {
    async getNobels(context) {
      const { data } = await axios.get(`https://api.nobelprize.org/v1/prize.json`);
      data.prizes.forEach(prize => {
        if (!prize.laureates) {
          prize.laureates = [
            {
              firstname: "",
              surname: "",
            }
          ];
        }
        for(let i = 0; i < data.prizes.length; i++){
          data.prizes[i].id = i
        }
      });
      context.commit("setNobels", data)
    },
    async getUser(context){
      const { data } = await axios.get('https://randomuser.me/api/');
      context.commit("setUser", data)
    },
  },
  modules: {},
});
