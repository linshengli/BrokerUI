<template>
<div>
    <h2>Pending Orders</h2>
    <el-table
        :data="PendingOrders"
        style="width: 100%"
        height="500"
        border
    >
        <el-table-column
            fixed
            sorted
            prop="id"
            label="TradeID"
        >
            </el-table-column>
            <el-table-column
                prop="broker"
                label="Broker"
            >
                </el-table-column>
                <el-table-column
                    prop="product"
                    label="Product"
                    sorted
                    width="120"                    
                >
                    </el-table-column>
                    <el-table-column
                        prop="period"
                        label="Period"
                        sorted
                    >
                        </el-table-column>
                        <el-table-column
                            prop="price"
                            label="Price"
                            sorted
                        >
                            </el-table-column>
                            <el-table-column
                                prop="count"
                                label="Quantity"
                                sorted
                            >
                                </el-table-column>
                                <el-table-column
                                    prop="itrader"
                                    label="Initiator Trader"
                                    width="150"
                                >
                                    </el-table-column>
                                    <el-table-column
                                    prop="itradercom"
                                    width="150"
                                    label="Initiator Company"
                                >
                                    </el-table-column>
                                    <el-table-column
                                    prop="iside"
                                   width="150"
                                    label="Initiator Side"
                                >
                                    </el-table-column>
                                        </el-table>
                                        <el-pagination
                                        layout="prev, pager, next"
                                        :total="PendingOrders.length || 10"
                                        :page-size=10
                                        background
                                        @current-change="handleCurrentChange" 
                                    >
                                        </el-pagination>
</div>
</template>
<script>
import { api_pendingOrders } from "../api/api";
export default {
  name: "brokerOrders",
  methods: {
    deleteRow(index, rows) {
      rows.splice(index, 1);
    },
    getPendingOrders() {
      let product = this.$route.params.product;
      api_pendingOrders(product, this.currentPage)
        .then(data => {
          console.log("Pending Orders");
          this.PendingOrders = data;
        })
        .catch(err => console.log(err));
    },
    handleCurrentChange(val) {
      this.currentPage = val;
      api_pendingOrders(product, this.currentPage)
        .then(data => {
          console.log("Pending Orders");
          this.PendingOrders = data;
        })
        .catch(err => console.log(err));
    }
  },
  data() {
    return {
      PendingOrders: [],
      currentPage: 0
    };
  },
  created() {
    // this.connect();
    window.setInterval(this.getPendingOrders,1000);
  }
};
</script>

<style scoped>
nav {
  margin-top: -60px;
}
h2 {
  margin: 10px;
}
</style>
