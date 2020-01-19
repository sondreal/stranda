<template>
  <div>
    <h1>Production overview</h1>
    <p>This is a demo for Stranda Prolog</p>
    <CCard>
        <CCardBody>
            <h5>Harvested fish: 65730 pcs </h5>
            <h5>Harvest start date: 2020.01.17 05:30</h5>
            
        </CCardBody>
    </CCard>
    <h3>Current harvesting speed</h3>
    <CWidgetProgress
    header="250 / 400"
    text="Lorem ipsum..."
    footer="Lorem ipsum dolor sit amet enim."
  >
    <CProgress
      animated
      color="success"
      height="1rem"
      :value="62.5"
    />
  </CWidgetProgress>
    <h2>Harvesting data</h2>
    <CTabs variant="pills">
        <CTab title="Total" active>
            <CCard>
            <CCardBody>
                <CRow>
                <CCol sm="5">
                    <h4 id="traffic" class="card-title mb-0">Production overview</h4>
                    <div class="small text-muted">Total harvest</div>
                </CCol>
                <CCol sm="7" class="d-none d-md-block">
                    <CButton color="primary" class="float-right">
                    <CIcon name="cil-cloud-download"/>
                    </CButton>
                    <CButtonGroup class="float-right mr-3">
                    <CButton
                        color="outline-secondary"
                        v-for="(value, key) in ['Day', 'Month', 'Year']"
                        :key="key"
                        class="mx-0"
                        :pressed="value === selected ? true : false"
                        @click="selected = value"
                    >
                        {{value}}
                    </CButton>
                    </CButtonGroup>
                </CCol>
                </CRow>
                <ProductionExample style="height:300px;margin-top:40px;"/>
            </CCardBody>
            <CCardFooter>
                <CRow class="text-center">
                <CCol md sm="12" class="mb-sm-2 mb-0">
                    <div class="text-muted">Current harvesting speed</div>
                    <strong>250 pr. min</strong>
                    <CProgress
                    class="progress-xs mt-2"
                    :precision="1"
                    color="success"
                    :value="62.5"
                    />
                </CCol>
                <CCol md sm="12" class="mb-sm-2 mb-0 d-md-down-none">
                    <div class="text-muted">Median harvest speed</div>
                    <strong>345</strong>
                    <CProgress
                    class="progress-xs mt-2"
                    :precision="1"
                    color="info"
                    :value="65"
                    />
                </CCol>
                <CCol md sm="12" class="mb-sm-2 mb-0">
                    <div class="text-muted">Pageviews</div>
                    <strong>78.706 Views (60%)</strong>
                    <CProgress
                    class="progress-xs mt-2"
                    :precision="1"
                    color="warning"
                    :value="60"
                    />
                </CCol>
                <CCol md sm="12" class="mb-sm-2 mb-0">
                    <div class="text-muted">New Users</div>
                    <strong>22.123 Users (80%)</strong>
                    <CProgress
                    class="progress-xs mt-2"
                    :precision="1"
                    color="danger"
                    :value="80"
                    />
                </CCol>
                <CCol md sm="12" class="mb-sm-2 mb-0 d-md-down-none">
                    <div class="text-muted">Total production</div>
                    <strong>56.942 fish</strong>
                    <CProgress
                    class="progress-xs mt-2"
                    :precision="1"
                    :value="40"
                    />
                </CCol>
                </CRow>
            </CCardFooter>
            </CCard>
        </CTab>


    <!-- Total prod start -->
    <CTab title="Pr. min">
        <CCard>
        <CCardBody>
            <CRow>
            <CCol sm="5">
                <h4 id="traffic" class="card-title mb-0">Production overview</h4>
                <div class="small text-muted">Harvest pr. min</div>
            </CCol>
            <CCol sm="7" class="d-none d-md-block">
                <CButton color="primary" class="float-right">
                <CIcon name="cil-cloud-download"/>
                </CButton>
                <CButtonGroup class="float-right mr-3">
                <CButton
                    color="outline-secondary"
                    v-for="(value, key) in ['Day', 'Month', 'Year']"
                    :key="key"
                    class="mx-0"
                    :pressed="value === selected ? true : false"
                    @click="selected = value"
                >
                    {{value}}
                </CButton>
                </CButtonGroup>
            </CCol>
            </CRow>
            <ProductionExample style="height:300px;margin-top:40px;"/>
        </CCardBody>
        <CCardFooter>
            <CRow class="text-center">
            <CCol md sm="12" class="mb-sm-2 mb-0">
                <div class="text-muted">Current harvesting speed</div>
                <strong>250 pr. min</strong>
                <CProgress
                class="progress-xs mt-2"
                :precision="1"
                color="success"
                :value="62.5"
                />
            </CCol>
            <CCol md sm="12" class="mb-sm-2 mb-0 d-md-down-none">
                <div class="text-muted">Unique</div>
                <strong>Median harvest speed</strong>
                <CProgress
                class="progress-xs mt-2"
                :precision="1"
                color="info"
                :value="62"
                />
            </CCol>
            <CCol md sm="12" class="mb-sm-2 mb-0">
                <div class="text-muted">Pageviews</div>
                <strong>78.706 Views (60%)</strong>
                <CProgress
                class="progress-xs mt-2"
                :precision="1"
                color="warning"
                :value="60"
                />
            </CCol>
            <CCol md sm="12" class="mb-sm-2 mb-0">
                <div class="text-muted">New Users</div>
                <strong>22.123 Users (80%)</strong>
                <CProgress
                class="progress-xs mt-2"
                :precision="1"
                color="danger"
                :value="80"
                />
            </CCol>
            <CCol md sm="12" class="mb-sm-2 mb-0 d-md-down-none">
                <div class="text-muted">Total production</div>
                <strong>56.942 fish</strong>
                <CProgress
                class="progress-xs mt-2"
                :precision="1"
                :value="40"
                />
            </CCol>
            </CRow>
        </CCardFooter>
        </CCard>
    </CTab>
    </CTabs>

    <!-- Total prod end -->

    <h2>HeliX data</h2>
    
      <CTabs>
        <CTab title="HeliX 1" active>
            <CCard>
        <CCardBody>
            <CRow>
            <CCol sm="5">
                <h4 id="traffic" class="card-title mb-0">Helix 1 Overview</h4>
                <div class="small text-muted">Temperature, weight and fish amount</div>
                <p> Total fish amount: 9000 pcs</p>
                <p>Total kg.: 32.000 kg</p>
                <h3>test</h3>
            </CCol>
            <CCol sm="7" class="d-none d-md-block">
            
                <CButton color="primary" class="float-right">
                <CIcon name="cil-cloud-download"/>
                </CButton>
                <CButtonGroup class="float-right mr-3">
                <CButton
                    color="outline-secondary"
                    v-for="(value, key) in ['Day', 'Month', 'Year']"
                    :key="key"
                    class="mx-0"
                    :pressed="value === selected ? true : false"
                    @click="selected = value"
                >
                    {{value}}
                </CButton>
                </CButtonGroup>
            </CCol>
            </CRow>
            <ProductionExample style="height:300px;margin-top:40px;"/>
        </CCardBody>
        <CCardFooter>
            <CRow class="text-center">
            <CCol md sm="12" class="mb-sm-2 mb-0">
                <div class="text-muted">Current harvest speed</div>
                <strong>250 pr. min</strong>
                <CProgress
                class="progress-xs mt-2"
                :precision="1"
                color="success"
                :value="62.5"
                />
            </CCol>
            <CCol md sm="12" class="mb-sm-2 mb-0 d-md-down-none">
                <div class="text-muted">Unique</div>
                <strong>Median harvest speed</strong>
                <CProgress
                class="progress-xs mt-2"
                :precision="1"
                color="info"
                :value="62"
                />
            </CCol>
            <CCol md sm="12" class="mb-sm-2 mb-0">
                <div class="text-muted">Pageviews</div>
                <strong>78.706 Views (60%)</strong>
                <CProgress
                class="progress-xs mt-2"
                :precision="1"
                color="warning"
                :value="60"
                />
            </CCol>
            <CCol md sm="12" class="mb-sm-2 mb-0">
                <div class="text-muted">New Users</div>
                <strong>22.123 Users (80%)</strong>
                <CProgress
                class="progress-xs mt-2"
                :precision="1"
                color="danger"
                :value="80"
                />
            </CCol>
            <CCol md sm="12" class="mb-sm-2 mb-0 d-md-down-none">
                <div class="text-muted">Total production</div>
                <strong>56.942 fish</strong>
                <CProgress
                class="progress-xs mt-2"
                :precision="1"
                :value="40"
                />
            </CCol>
            </CRow>
        </CCardFooter>
        </CCard>
        </CTab>
        <CTab title="HeliX 2">
            <CCard>
        <CCardBody>
            <CRow>
            <CCol sm="5">
                <h4 id="traffic" class="card-title mb-0">Production overview</h4>
                <div class="small text-muted">Hourly production rate</div>
            </CCol>
            <CCol sm="7" class="d-none d-md-block">
                <CButton color="primary" class="float-right">
                <CIcon name="cil-cloud-download"/>
                </CButton>
                <CButtonGroup class="float-right mr-3">
                <CButton
                    color="outline-secondary"
                    v-for="(value, key) in ['Day', 'Month', 'Year']"
                    :key="key"
                    class="mx-0"
                    :pressed="value === selected ? true : false"
                    @click="selected = value"
                >
                    {{value}}
                </CButton>
                </CButtonGroup>
            </CCol>
            </CRow>
            <ProductionExample style="height:300px;margin-top:40px;"/>
        </CCardBody>
        <CCardFooter>
            <CRow class="text-center">
            <CCol md sm="12" class="mb-sm-2 mb-0">
                <div class="text-muted">Current harvesting speed</div>
                <strong>250 pr.min</strong>
                <CProgress
                class="progress-xs mt-2"
                :precision="1"
                color="success"
                :value="62.5"
                />
            </CCol>
            <CCol md sm="12" class="mb-sm-2 mb-0 d-md-down-none">
                <div class="text-muted">Unique</div>
                <strong>Median harvest speed</strong>
                <CProgress
                class="progress-xs mt-2"
                :precision="1"
                color="info"
                :value="62"
                />
            </CCol>
            <CCol md sm="12" class="mb-sm-2 mb-0">
                <div class="text-muted">Pageviews</div>
                <strong>78.706 Views (60%)</strong>
                <CProgress
                class="progress-xs mt-2"
                :precision="1"
                color="warning"
                :value="60"
                />
            </CCol>
            <CCol md sm="12" class="mb-sm-2 mb-0">
                <div class="text-muted">New Users</div>
                <strong>22.123 Users (80%)</strong>
                <CProgress
                class="progress-xs mt-2"
                :precision="1"
                color="danger"
                :value="80"
                />
            </CCol>
            <CCol md sm="12" class="mb-sm-2 mb-0 d-md-down-none">
                <div class="text-muted">Total Production</div>
                <strong>56.942 fish</strong>
                <CProgress
                class="progress-xs mt-2"
                :precision="1"
                :value="40"
                />
            </CCol>
            </CRow>
        </CCardFooter>
        </CCard>
        </CTab>
        <CTab title="HeliX 3">
            <CCard>
        <CCardBody>
            <CRow>
            <CCol sm="5">
                <h4 id="traffic" class="card-title mb-0">Production overview</h4>
                <div class="small text-muted">Hourly production rate</div>
            </CCol>
            <CCol sm="7" class="d-none d-md-block">
                <CButton color="primary" class="float-right">
                <CIcon name="cil-cloud-download"/>
                </CButton>
                <CButtonGroup class="float-right mr-3">
                <CButton
                    color="outline-secondary"
                    v-for="(value, key) in ['Day', 'Month', 'Year']"
                    :key="key"
                    class="mx-0"
                    :pressed="value === selected ? true : false"
                    @click="selected = value"
                >
                    {{value}}
                </CButton>
                </CButtonGroup>
            </CCol>
            </CRow>
            <ProductionExample style="height:300px;margin-top:40px;"/>
        </CCardBody>
        <CCardFooter>
            <CRow class="text-center">
            <CCol md sm="12" class="mb-sm-2 mb-0">
                <div class="text-muted">Current harvesting speed</div>
                <strong>250 pr. min</strong>
                <CProgress
                class="progress-xs mt-2"
                :precision="1"
                color="success"
                :value="62.5"
                />
            </CCol>
            <CCol md sm="12" class="mb-sm-2 mb-0 d-md-down-none">
                <div class="text-muted">Unique</div>
                <strong>Median harvest speed</strong>
                <CProgress
                class="progress-xs mt-2"
                :precision="1"
                color="info"
                :value="62"
                />
            </CCol>
            <CCol md sm="12" class="mb-sm-2 mb-0">
                <div class="text-muted">Pageviews</div>
                <strong>78.706 Views (60%)</strong>
                <CProgress
                class="progress-xs mt-2"
                :precision="1"
                color="warning"
                :value="60"
                />
            </CCol>
            <CCol md sm="12" class="mb-sm-2 mb-0">
                <div class="text-muted">New Users</div>
                <strong>22.123 Users (80%)</strong>
                <CProgress
                class="progress-xs mt-2"
                :precision="1"
                color="danger"
                :value="80"
                />
            </CCol>
            <CCol md sm="12" class="mb-sm-2 mb-0 d-md-down-none">
                <div class="text-muted">Total production</div>
                <strong>56.942 fish</strong>
                <CProgress
                class="progress-xs mt-2"
                :precision="1"
                :value="40"
                />
            </CCol>
            </CRow>
        </CCardFooter>
        </CCard>
        </CTab>
        <CTab title="HeliX 4">
            <CCard>
        <CCardBody>
            <CRow>
            <CCol sm="5">
                <h4 id="traffic" class="card-title mb-0">Production overview</h4>
                <div class="small text-muted">Hourly production rate</div>
            </CCol>
            <CCol sm="7" class="d-none d-md-block">
                <CButton color="primary" class="float-right">
                <CIcon name="cil-cloud-download"/>
                </CButton>
                <CButtonGroup class="float-right mr-3">
                <CButton
                    color="outline-secondary"
                    v-for="(value, key) in ['Day', 'Month', 'Year']"
                    :key="key"
                    class="mx-0"
                    :pressed="value === selected ? true : false"
                    @click="selected = value"
                >
                    {{value}}
                </CButton>
                </CButtonGroup>
            </CCol>
            </CRow>
            <ProductionExample style="height:300px;margin-top:40px;"/>
        </CCardBody>
        <CCardFooter>
            <CRow class="text-center">
            <CCol md sm="12" class="mb-sm-2 mb-0">
                <div class="text-muted">Current harvesting speed</div>
                <strong>250 pr. min</strong>
                <CProgress
                class="progress-xs mt-2"
                :precision="1"
                color="success"
                :value="62.5"
                />
            </CCol>
            <CCol md sm="12" class="mb-sm-2 mb-0 d-md-down-none">
                <div class="text-muted">Unique</div>
                <strong>Median harvest speed</strong>
                <CProgress
                class="progress-xs mt-2"
                :precision="1"
                color="info"
                :value="62"
                />
            </CCol>
            <CCol md sm="12" class="mb-sm-2 mb-0">
                <div class="text-muted">Pageviews</div>
                <strong>78.706 Views (60%)</strong>
                <CProgress
                class="progress-xs mt-2"
                :precision="1"
                color="warning"
                :value="60"
                />
            </CCol>
            <CCol md sm="12" class="mb-sm-2 mb-0">
                <div class="text-muted">New Users</div>
                <strong>22.123 Users (80%)</strong>
                <CProgress
                class="progress-xs mt-2"
                :precision="1"
                color="danger"
                :value="80"
                />
            </CCol>
            <CCol md sm="12" class="mb-sm-2 mb-0 d-md-down-none">
                <div class="text-muted">Total production</div>
                <strong>56.942 fish</strong>
                <CProgress
                class="progress-xs mt-2"
                :precision="1"
                :value="40"
                />
            </CCol>
            </CRow>
        </CCardFooter>
        </CCard>
        </CTab>
      </CTabs>
    
  </div>
</template>

<script>
import ProductionExample from './charts/ProductionExample'
import WidgetsDropdown from './widgets/WidgetsDropdown'
import WidgetsBrand from './widgets/WidgetsBrand'

export default {
  name: 'Production',
  components: {
    ProductionExample,
    WidgetsDropdown,
    WidgetsBrand
  },
  data () {
    return {
      selected: 'Month',
      tableItems: [
        {
          avatar: { url: 'img/avatars/1.jpg', status: 'success' },
          user: { name: 'Yiorgos Avraamu', new: true, registered: 'Jan 1, 2015' },
          country: { name: 'USA', flag: 'cif-us' },
          usage: { value: 50, period: 'Jun 11, 2015 - Jul 10, 2015' },
          payment: { name: 'Mastercard', icon: 'cib-cc-mastercard' },
          activity: '10 sec ago'
        },
        {
          avatar: { url: 'img/avatars/2.jpg', status: 'danger' },
          user: { name: 'Avram Tarasios', new: false, registered: 'Jan 1, 2015' },
          country: { name: 'Brazil', flag: 'cif-br' },
          usage: { value: 22, period: 'Jun 11, 2015 - Jul 10, 2015' },
          payment: { name: 'Visa', icon: 'cib-cc-visa' },
          activity: '5 minutes ago'
        },
        {
          avatar: { url: 'img/avatars/3.jpg', status: 'warning' },
          user: { name: 'Quintin Ed', new: true, registered: 'Jan 1, 2015' },
          country: { name: 'India', flag: 'cif-in' },
          usage: { value: 74, period: 'Jun 11, 2015 - Jul 10, 2015' },
          payment: { name: 'Stripe', icon: 'cib-stripe' },
          activity: '1 hour ago'
        },
        {
          avatar: { url: 'img/avatars/4.jpg', status: '' },
          user: { name: 'Enéas Kwadwo', new: true, registered: 'Jan 1, 2015' },
          country: { name: 'France', flag: 'cif-fr' },
          usage: { value: 98, period: 'Jun 11, 2015 - Jul 10, 2015' },
          payment: { name: 'PayPal', icon: 'cib-paypal' },
          activity: 'Last month'
        },
        {
          avatar: { url: 'img/avatars/5.jpg', status: 'success' },
          user: { name: 'Agapetus Tadeáš', new: true, registered: 'Jan 1, 2015' },
          country: { name: 'Spain', flag: 'cif-es' },
          usage: { value: 22, period: 'Jun 11, 2015 - Jul 10, 2015' },
          payment: { name: 'Google Wallet', icon: 'cib-google-pay' },
          activity: 'Last week'
        },
        {
          avatar: { url: 'img/avatars/6.jpg', status: 'danger' },
          user: { name: 'Friderik Dávid', new: true, registered: 'Jan 1, 2015' },
          country: { name: 'Poland', flag: 'cif-pl' },
          usage: { value: 43, period: 'Jun 11, 2015 - Jul 10, 2015' },
          payment: { name: 'Amex', icon: 'cib-cc-amex' },
          activity: 'Last week'
        }
      ],
      tableFields: [
        { key: 'avatar', label: '', _classes: 'text-center' },
        { key: 'user' },
        { key: 'country', _classes: 'text-center' },
        { key: 'usage' },
        { key: 'payment', label: 'Payment method', _classes: 'text-center' },
        { key: 'activity' },
      ]
    }
  },
  methods: {
    color (value) {
      let $color
      if (value <= 25) {
        $color = 'info'
      } else if (value > 25 && value <= 50) {
        $color = 'success'
      } else if (value > 50 && value <= 75) {
        $color = 'warning'
      } else if (value > 75 && value <= 100) {
        $color = 'danger'
      }
      return $color
    }
  }
}
</script>
