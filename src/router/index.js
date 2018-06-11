import Vue from "vue";
import Router from "vue-router";
import HelloWorld from "@/components/HelloWorld";
import MainPage from "@/components/MainPage";
import IndexPage from "@/components/IndexPage";
import CompletedPage from "@/components/CompletedPage";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "defaultPage",
      component: IndexPage
    },
    {
      path: "/index",
      name: "IndexPage",
      component: IndexPage
    },
    {
      path: "/completed_transactions",
      name: "CompletedTransactions",
      component: CompletedPage
    },
    {
      path: "/product/:product",
      name: "DetailProduct",
      component: MainPage
    }
  ]
});
