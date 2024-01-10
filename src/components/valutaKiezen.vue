<template>
  <section>
    <div>
      <input
        type="number"
        v-model.number="bedrag"
        @input="resetKnopStatus"
        placeholder="Voer bedrag in"
        class="input-bedrag"
      />
    </div>

    <div>
      <label for="vanValuta">Van:</label>
      <select
        name="vanValuta"
        v-model="eersteValuta"
        @change="verkrijgData"
        class="dropdown"
      >
        <option value="EUR">EUR</option>
        <option value="AED">AED</option>
        <option value="AFN">AFN</option>
        <option value="ALL">ALL</option>
        <option value="AMD">AMD</option>
        <option value="ANG">ANG</option>
        <option value="AOA">AOA</option>
        <option value="ARS">ARS</option>
        <option value="AUD">AUD</option>
        <option value="AWG">AWG</option>
        <option value="AZN">AZN</option>
        <option value="BAM">BAM</option>
        <option value="BBD">BBD</option>
        <option value="BDT">BDT</option>
        <option value="BGN">BGN</option>
        <option value="BHD">BHD</option>
        <option value="BIF">BIF</option>
        <option value="BMD">BMD</option>
        <option value="BND">BND</option>
        <option value="BOB">BOB</option>
        <option value="BRL">BRL</option>
        <option value="BSD">BSD</option>
        <option value="BTN">BTN</option>
        <option value="BWP">BWP</option>
        <option value="BYN">BYN</option>
        <option value="BZD">BZD</option>
        <option value="CAD">CAD</option>
        <option value="CDF">CDF</option>
        <option value="CHF">CHF</option>
        <option value="CLP">CLP</option>
        <option value="CNY">CNY</option>
        <option value="COP">COP</option>
        <option value="CRC">CRC</option>
        <option value="CUP">CUP</option>
        <option value="CVE">CVE</option>
        <option value="CZK">CZK</option>
        <option value="DJF">DJF</option>
        <option value="DKK">DKK</option>
        <option value="DOP">DOP</option>
        <option value="DZD">DZD</option>
        <option value="EGP">EGP</option>
        <option value="ERN">ERN</option>
        <option value="ETB">ETB</option>
        <option value="FJD">FJD</option>
        <option value="FKP">FKP</option>
        <option value="FOK">FOK</option>
        <option value="GBP">GBP</option>
        <option value="GEL">GEL</option>
        <option value="GGP">GGP</option>
        <option value="GHS">GHS</option>
        <option value="GIP">GIP</option>
        <option value="GMD">GMD</option>
        <option value="GNF">GNF</option>
        <option value="GTQ">GTQ</option>
        <option value="GYD">GYD</option>
        <option value="HKD">HKD</option>
        <option value="HNL">HNL</option>
        <option value="HRK">HRK</option>
        <option value="HTG">HTG</option>
        <option value="HUF">HUF</option>
        <option value="IDR">IDR</option>
        <option value="ILS">ILS</option>
        <option value="IMP">IMP</option>
        <option value="INR">INR</option>
        <option value="IQD">IQD</option>
        <option value="IRR">IRR</option>
        <option value="ISK">ISK</option>
        <option value="JEP">JEP</option>
        <option value="JMD">JMD</option>
        <option value="JOD">JOD</option>
        <option value="JPY">JPY</option>
        <option value="KES">KES</option>
        <option value="KGS">KGS</option>
        <option value="KHR">KHR</option>
        <option value="KID">KID</option>
        <option value="KMF">KMF</option>
        <option value="KRW">KRW</option>
        <option value="KWD">KWD</option>
        <option value="KYD">KYD</option>
        <option value="KZT">KZT</option>
        <option value="LAK">LAK</option>
        <option value="LBP">LBP</option>
        <option value="LKR">LKR</option>
        <option value="LRD">LRD</option>
        <option value="LSL">LSL</option>
        <option value="LYD">LYD</option>
        <option value="MAD">MAD</option>
        <option value="MDL">MDL</option>
        <option value="MGA">MGA</option>
        <option value="MKD">MKD</option>
        <option value="MMK">MMK</option>
        <option value="MNT">MNT</option>
        <option value="MOP">MOP</option>
        <option value="MRU">MRU</option>
        <option value="MUR">MUR</option>
        <option value="MVR">MVR</option>
        <option value="MWK">MWK</option>
        <option value="MXN">MXN</option>
        <option value="MYR">MYR</option>
        <option value="MZN">MZN</option>
        <option value="NAD">NAD</option>
        <option value="NGN">NGN</option>
        <option value="NIO">NIO</option>
        <option value="NOK">NOK</option>
        <option value="NPR">NPR</option>
        <option value="NZD">NZD</option>
        <option value="OMR">OMR</option>
        <option value="PAB">PAB</option>
        <option value="PEN">PEN</option>
        <option value="PGK">PGK</option>
        <option value="PHP">PHP</option>
        <option value="PKR">PKR</option>
        <option value="PLN">PLN</option>
        <option value="PYG">PYG</option>
        <option value="QAR">QAR</option>
        <option value="RON">RON</option>
        <option value="RSD">RSD</option>
        <option value="RUB">RUB</option>
        <option value="RWF">RWF</option>
        <option value="SAR">SAR</option>
        <option value="SBD">SBD</option>
        <option value="SCR">SCR</option>
        <option value="SDG">SDG</option>
        <option value="SEK">SEK</option>
        <option value="SGD">SGD</option>
        <option value="SHP">SHP</option>
        <option value="SLE">SLE</option>
        <option value="SLL">SLL</option>
        <option value="SOS">SOS</option>
        <option value="SRD">SRD</option>
        <option value="SSP">SSP</option>
        <option value="STN">STN</option>
        <option value="SYP">SYP</option>
        <option value="SZL">SZL</option>
        <option value="THB">THB</option>
        <option value="TJS">TJS</option>
        <option value="TMT">TMT</option>
        <option value="TND">TND</option>
        <option value="TOP">TOP</option>
        <option value="TRY">TRY</option>
        <option value="TTD">TTD</option>
        <option value="TVD">TVD</option>
        <option value="TWD">TWD</option>
        <option value="TZS">TZS</option>
        <option value="UAH">UAH</option>
        <option value="UGX">UGX</option>
        <option value="USD">USD</option>
        <option value="UYU">UYU</option>
        <option value="UZS">UZS</option>
        <option value="VES">VES</option>
        <option value="VND">VND</option>
        <option value="VUV">VUV</option>
        <option value="WST">WST</option>
        <option value="XAF">XAF</option>
        <option value="XCD">XCD</option>
        <option value="XDR">XDR</option>
        <option value="XOF">XOF</option>
        <option value="XPF">XPF</option>
        <option value="YER">YER</option>
        <option value="ZAR">ZAR</option>
        <option value="ZMW">ZMW</option>
        <option value="ZWL">ZWL</option>
      </select>
    </div>
    <div>
      <label for="naarValuta">Naar:</label>
      <select
        name="naarValuta"
        v-model="tweedeValuta"
        @change="berekenConversie"
        class="dropdown"
      >
        <option value="EUR">EUR</option>
        <option value="AED">AED</option>
        <option value="AFN">AFN</option>
        <option value="ALL">ALL</option>
        <option value="AMD">AMD</option>
        <option value="ANG">ANG</option>
        <option value="AOA">AOA</option>
        <option value="ARS">ARS</option>
        <option value="AUD">AUD</option>
        <option value="AWG">AWG</option>
        <option value="AZN">AZN</option>
        <option value="BAM">BAM</option>
        <option value="BBD">BBD</option>
        <option value="BDT">BDT</option>
        <option value="BGN">BGN</option>
        <option value="BHD">BHD</option>
        <option value="BIF">BIF</option>
        <option value="BMD">BMD</option>
        <option value="BND">BND</option>
        <option value="BOB">BOB</option>
        <option value="BRL">BRL</option>
        <option value="BSD">BSD</option>
        <option value="BTN">BTN</option>
        <option value="BWP">BWP</option>
        <option value="BYN">BYN</option>
        <option value="BZD">BZD</option>
        <option value="CAD">CAD</option>
        <option value="CDF">CDF</option>
        <option value="CHF">CHF</option>
        <option value="CLP">CLP</option>
        <option value="CNY">CNY</option>
        <option value="COP">COP</option>
        <option value="CRC">CRC</option>
        <option value="CUP">CUP</option>
        <option value="CVE">CVE</option>
        <option value="CZK">CZK</option>
        <option value="DJF">DJF</option>
        <option value="DKK">DKK</option>
        <option value="DOP">DOP</option>
        <option value="DZD">DZD</option>
        <option value="EGP">EGP</option>
        <option value="ERN">ERN</option>
        <option value="ETB">ETB</option>
        <option value="FJD">FJD</option>
        <option value="FKP">FKP</option>
        <option value="FOK">FOK</option>
        <option value="GBP">GBP</option>
        <option value="GEL">GEL</option>
        <option value="GGP">GGP</option>
        <option value="GHS">GHS</option>
        <option value="GIP">GIP</option>
        <option value="GMD">GMD</option>
        <option value="GNF">GNF</option>
        <option value="GTQ">GTQ</option>
        <option value="GYD">GYD</option>
        <option value="HKD">HKD</option>
        <option value="HNL">HNL</option>
        <option value="HRK">HRK</option>
        <option value="HTG">HTG</option>
        <option value="HUF">HUF</option>
        <option value="IDR">IDR</option>
        <option value="ILS">ILS</option>
        <option value="IMP">IMP</option>
        <option value="INR">INR</option>
        <option value="IQD">IQD</option>
        <option value="IRR">IRR</option>
        <option value="ISK">ISK</option>
        <option value="JEP">JEP</option>
        <option value="JMD">JMD</option>
        <option value="JOD">JOD</option>
        <option value="JPY">JPY</option>
        <option value="KES">KES</option>
        <option value="KGS">KGS</option>
        <option value="KHR">KHR</option>
        <option value="KID">KID</option>
        <option value="KMF">KMF</option>
        <option value="KRW">KRW</option>
        <option value="KWD">KWD</option>
        <option value="KYD">KYD</option>
        <option value="KZT">KZT</option>
        <option value="LAK">LAK</option>
        <option value="LBP">LBP</option>
        <option value="LKR">LKR</option>
        <option value="LRD">LRD</option>
        <option value="LSL">LSL</option>
        <option value="LYD">LYD</option>
        <option value="MAD">MAD</option>
        <option value="MDL">MDL</option>
        <option value="MGA">MGA</option>
        <option value="MKD">MKD</option>
        <option value="MMK">MMK</option>
        <option value="MNT">MNT</option>
        <option value="MOP">MOP</option>
        <option value="MRU">MRU</option>
        <option value="MUR">MUR</option>
        <option value="MVR">MVR</option>
        <option value="MWK">MWK</option>
        <option value="MXN">MXN</option>
        <option value="MYR">MYR</option>
        <option value="MZN">MZN</option>
        <option value="NAD">NAD</option>
        <option value="NGN">NGN</option>
        <option value="NIO">NIO</option>
        <option value="NOK">NOK</option>
        <option value="NPR">NPR</option>
        <option value="NZD">NZD</option>
        <option value="OMR">OMR</option>
        <option value="PAB">PAB</option>
        <option value="PEN">PEN</option>
        <option value="PGK">PGK</option>
        <option value="PHP">PHP</option>
        <option value="PKR">PKR</option>
        <option value="PLN">PLN</option>
        <option value="PYG">PYG</option>
        <option value="QAR">QAR</option>
        <option value="RON">RON</option>
        <option value="RSD">RSD</option>
        <option value="RUB">RUB</option>
        <option value="RWF">RWF</option>
        <option value="SAR">SAR</option>
        <option value="SBD">SBD</option>
        <option value="SCR">SCR</option>
        <option value="SDG">SDG</option>
        <option value="SEK">SEK</option>
        <option value="SGD">SGD</option>
        <option value="SHP">SHP</option>
        <option value="SLE">SLE</option>
        <option value="SLL">SLL</option>
        <option value="SOS">SOS</option>
        <option value="SRD">SRD</option>
        <option value="SSP">SSP</option>
        <option value="STN">STN</option>
        <option value="SYP">SYP</option>
        <option value="SZL">SZL</option>
        <option value="THB">THB</option>
        <option value="TJS">TJS</option>
        <option value="TMT">TMT</option>
        <option value="TND">TND</option>
        <option value="TOP">TOP</option>
        <option value="TRY">TRY</option>
        <option value="TTD">TTD</option>
        <option value="TVD">TVD</option>
        <option value="TWD">TWD</option>
        <option value="TZS">TZS</option>
        <option value="UAH">UAH</option>
        <option value="UGX">UGX</option>
        <option value="USD">USD</option>
        <option value="UYU">UYU</option>
        <option value="UZS">UZS</option>
        <option value="VES">VES</option>
        <option value="VND">VND</option>
        <option value="VUV">VUV</option>
        <option value="WST">WST</option>
        <option value="XAF">XAF</option>
        <option value="XCD">XCD</option>
        <option value="XDR">XDR</option>
        <option value="XOF">XOF</option>
        <option value="XPF">XPF</option>
        <option value="YER">YER</option>
        <option value="ZAR">ZAR</option>
        <option value="ZMW">ZMW</option>
        <option value="ZWL">ZWL</option>
      </select>
    </div>

    <button @click="verkrijgData">Wisselkoers Ophalen</button>

      <div v-if="geconverteerdBedrag && bedrag && isKnopGeklikt" class="conversie-resultaat">
        <span class="bedrag-weergave">
          {{ bedrag }} {{ eersteValuta }} is gelijk aan {{ geconverteerdBedrag }} {{ tweedeValuta }}
        </span>
        <button @click="resetConversie" class="andere-valuta-knop">Andere Valuta Converteren</button>
      </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      bedrag: null,
      eersteValuta: "EUR",
      tweedeValuta: "USD",
      conversieRatio: null,
      geconverteerdBedrag: null,
      isKnopGeklikt: false,
    };
  },

  methods: {
    async verkrijgData() {
      this.resetKeuzeStatus();
      try {
        const response = await fetch(`https://v6.exchangerate-api.com/v6/a8db7cdf8333daa4c2c635f5/latest/${this.eersteValuta}`);
        const data = await response.json();
        this.conversieRatio = data.conversion_rates[this.tweedeValuta];
        this.berekenConversie(); 
      } catch (error) {
        console.error('Fout bij het ophalen van wisselkoersen', error);
      }
      this.isKnopGeklikt = true;
    },

        resetConversie() {
      this.bedrag = null;
      this.geconverteerdBedrag = null;
      this.isKnopGeklikt = false;
    },

        resetKnopStatus() {
          if (this.bedrag == ""){
      this.isKnopGeklikt = false;}
    },

    resetKeuzeStatus() {
      this.isKnopGeklikt = false;
    },

    berekenConversie() {
      if (this.bedrag != null && this.conversieRatio != null) {
        this.geconverteerdBedrag = (this.bedrag * this.conversieRatio).toFixed(2);
      }
    }
  },

};
</script>