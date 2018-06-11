<template>
<div>
    <Navbar></Navbar>
    <MarketDepth></MarketDepth>
    <BrokerOrders class="brokerOrders"></BrokerOrders>
</div>
</template>

<script>
import Navbar from "./navbar";
import MarketDepth from "./marketDepth";
import BrokerOrders from "./brokerOrders";
export default {
    components: {
        Navbar,
        MarketDepth,
        BrokerOrders
    },
    name: "MainPage",
    data() {
        return {
            msg: "Welcome to Your Vue.js App"
        };
    }
};
</script>

<style scoped>
.brokerOrders{
  /* position: right; */
  float: right;
  width: 60%;
  margin-top: 0px;
  margin-left: 0px;
}
</style>
