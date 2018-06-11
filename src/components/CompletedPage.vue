<template>
<div>
    <Navbar></Navbar>
    <el-col
        :span="24"
        class="toolbar"
        style="padding-top: 10px;"
    >
        <el-form>
            <el-form-item>
                <!-- <el-button type="primary" @click="handleAdd">新增</el-button> -->
                <el-col :span=2>
                    Product:
                </el-col>
                <el-col :span=3>
                    <el-select
                        v-model="searchProduct"
                        type="text"
                    >
                        <el-option
                         v-for="(value, index) in productLlist" :key="index"
                         :label="value"
                         :value="value"
                        >
                        </el-option>
                    </el-select>
                </el-col>

                <el-col :span=3>
                    Initiator Company:
                </el-col>
                <el-col :span=3>
                    <el-select
                        v-model="searchInitiatorCompany"
                        type="text"
                    >
                        <el-option
                         v-for="(value, index) in companyList" :key="index"
                         :label="value"
                         :value="value"
                        >
                        </el-option>
                    </el-select>
                </el-col>

                <el-col :span=2>
                    Order Type:
                </el-col>

                <el-col :span=3>
                    <el-select
                        v-model="searchOrderType"
                        placeholder="Please choose order type"
                    >
                        <el-option
                            label="Market order"
                            value="0"
                            style="width: 100%;"
                        ></el-option>
                            <el-option
                                label="Limit Order"
                                value="1"
                            ></el-option>

                                <el-option
                                    label="Stop Order"
                                    value="2"
                                ></el-option>
                                    </el-select>
                </el-col>

                <el-col :span=2>
                    Initiator Side:
                </el-col>
                <el-col :span=3>
                    <el-select
                        v-model="searchInitiatorSide"
                        placeholder="Please choose buy or sell"
                    >
                        <el-option
                            label="Buy"
                            value="B"
                        ></el-option>
                            <el-option
                                label="Sell"
                                value="S"
                            ></el-option>
                                </el-select>
                </el-col>
                <el-col :span=3>
                    <div class="btn btn-success" @click="seachData">Search</div>
                </el-col>
            </el-form-item>
        </el-form>
        </el-col>
        <el-table
            :data="seachData"
            style="width: 100%"
            height="480"
            border
        >
            <el-table-column
                fixed
                prop="id"
                label="TradeID"
                width="120"
                sortable
            >
                </el-table-column>
                <el-table-column
                    prop="broker"
                    label="Broker"
                    width="120"
                >
                    </el-table-column>
                    <el-table-column
                        prop="product"
                        label="Product"
                        width="120"
                    >
                        </el-table-column>
                        <el-table-column
                            prop="period"
                            label="Period"
                            width="120"
                        >
                            </el-table-column>
                            <el-table-column
                                prop="price"
                                label="Price"
                                width="120"
                            >
                                </el-table-column>
                                <el-table-column
                                    prop="count"
                                    label="Quantity"
                                    width="120"
                                >
                                    </el-table-column>
                                    <el-table-column
                                        prop="type"
                                        label="order type"
                                        sortable
                                        width="120"
                                    >
                                        <template slot-scope="scope">
                                            <span style="margin-left: 10px">{{ orderType[scope.row.type] }}</span>
                                        </template>
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
                                                    <el-table-column
                                                        prop="ftrader"
                                                        width="150"
                                                        label="Completion Trader"
                                                    >
                                                        </el-table-column>
                                                        <el-table-column
                                                            prop="ftradercom"
                                                            width="150"
                                                            label="Completion Company"
                                                        >
                                                            </el-table-column>
                                                            <el-table-column
                                                                prop="fside"
                                                                width="150"
                                                                label="Completion Side"
                                                            >
                                                                </el-table-column>
                                                                </el-table>
                                                                <el-pagination
                                                                    layout="prev, pager, next"
                                                                    :total="completedOrder.legth || 10"
                                                                    :page-size=10
                                                                    @current-change="handleCurrentChange"
                                                                    background
                                                                >
                                                                    </el-pagination>

</div>
</template>

<script>
import { api_completedOrders } from "../api/api";
import Navbar from "./navbar";
export default {
  components: {
    Navbar
  },
  name: "CompletedPage",
  computed: {
    productLlist() {
        return this.completedOrder.map(value => value.product) || [];
    },
    companyList() {
      return this.completedOrder.map(value => value.itradercom) || [];
    }
  },
  data() {
    return {
      orderType: ["Market Order", "Limit Order", "Stop Order", "Cancel Order"],
      completedOrder: [],
      currentPage: 0,
      searchProduct: "",
      searchInitiatorCompany: "",
      searchOrderType: "",
      searchInitiatorSide: ""
    };
  },
  methods: {
    seachData() {
      return this.completedOrder.filter(
        value =>
          (this.searchProduct == "" || value.product == this.searchProduct) &&
          (this.searchInitiatorCompany == "" ||
            value.itradercom == this.searchInitiatorCompany) &&
          (this.searchOrderType == "" || value.type == this.searchOrderType) &&
          (this.searchInitiatorSide == "" ||
            value.iside == this.searchInitiatorSide)
      );
    },
    getCompletedData() {
      //   let product = this.$route.params.product;
      api_completedOrders(this.currentPage)
        .then(data => {
          this.completedOrder = data;
          console.log("completedOrder");
          console.log(data);
        })
        .catch(err => console.log(err));
    },
    handleCurrentChange(val) {
      this.currentPage = val;
      api_completedOrders(this.currentPage)
        .then(data => {
          this.completedOrder = data;
          console.log("completedOrder");
          console.log(data);
        })
        .catch(err => console.log(err));
    }
  },
  mounted() {
    this.getCompletedData("Gold Swaps");
  },
  created() {}
};
</script>

<style scoped>
</style>
