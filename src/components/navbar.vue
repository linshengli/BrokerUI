<template>
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <a
        class="navbar-brand"
        href="#/index"
    >BrokerUI Product{{ $route.params.product == undefined ? "" : '-' + $route.params.product }}</a>
        <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
        >
            <span class="navbar-toggler-icon"></span>
            </button>
            <div
                class="collapse navbar-collapse container"
                id="navbarNav"
            >
                <ul class="navbar-nav">
                    <li class="nav-item dropdown">
                        <a
                            class="nav-link dropdown-toggle"
                            href="#"
                            id="navbarDropdownMenuLink"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                            v-text="tbrand"
                        >
                           
                            </a>
                            <div
                                class="dropdown-menu"
                                aria-labelledby="navbarDropdownMenuLink"
                            >
                                    <a
                                        class="dropdown-item"
                                        href="#/product/Gold Swaps"
                                    >Gold Swaps</a>
                                    <a
                                    class="dropdown-item"
                                    href="#/product/Silver Swaps"
                                >Silver Swaps</a>
                                            </div>
                    </li>
                    <li class="nav-item pull-right">
                        <a
                            class="nav-link pull-right"
                            href="#/completed_transactions"
                        >Completed Transactions</a>
                    </li>
                </ul>
                </div>
</nav>
</template>

<script>
import {COMPANYNAME} from "../api/api";
export default {
  name: "Navbar",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },
  computed: {
    tbrand() {
      return COMPANYNAME;
    }
  },
  methods:{
    //   changeProduct(product){
    //       this.$route.go(0)
    //   }
  }
};
</script>

<style scoped>
nav {
  margin-top: -60px;
}

.pull-right {
  float: right;
}
</style>
