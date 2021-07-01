import ZoneContainer from './ZoneContainer.js';
import ZoneCard from './ZoneCard.js';
import store from '../../store.js'
import AlertBox from '../../../SharedComponents/AlertBox.js';

export default {
    template: `
    <div>
    <button :class="activeBtn" :disabled="isActive" @click="updateCountries">Update Countries</button>
    <alert-box v-if="showSuccess" :boxData="alertData"></alert-box>
    <div>
      <div id="zone0" class="two columns countryColumn u-max-full-width" 
      @drop='onDrop($event, 0)'        
      @dragover.prevent
      @dragenter.prevent>
        <p style="text-align: center;">Default</p>
        <zone-card
          class="country" v-for="country in zone0" :country="country" :key="country.Code" draggable @dragstart="startDrag($event, country)">
        </zone-card>
      </div>

      <div id="zone1" class="two columns countryColumn u-max-full-width"
      @drop='onDrop($event, 1)'        
      @dragover.prevent
      @dragenter.prevent>
      <p style="text-align: center;">Zone 1</p>
      <zone-card
        v-for="country in zone1"
        :country="country" 
        :key="country.Code" class="country"
        draggable
        @dragstart='startDrag($event, country)'
      ></zone-card>
      </div>

      <div id="zone2" class="two columns countryColumn u-max-full-width"
      @drop='onDrop($event, 2)'        
      @dragover.prevent
      @dragenter.prevent>
      <p style="text-align: center;">Zone 2</p>
      <zone-card
        v-for="country in zone2"
        :country="country" 
        :key="country.Code" class="country"
        draggable
        @dragstart='startDrag($event, country)'
      ></zone-card>
      </div>

      <div id="zone3" class="two columns countryColumn u-max-full-width" 
      @drop='onDrop($event, 3)'        
      @dragover.prevent
      @dragenter.prevent>
        <p style="text-align: center;">Zone 3</p>
        <zone-card
          class="country" v-for="country in zone3" :country="country" :key="country.Code" draggable @dragstart="startDrag($event, country)">
        </zone-card>
      </div>

      <div id="zone4" class="two columns countryColumn u-max-full-width" 
      @drop='onDrop($event, 4)'        
      @dragover.prevent
      @dragenter.prevent>
        <p style="text-align: center;">Zone 4</p>
        <zone-card
          class="country" v-for="country in zone4" :country="country" :key="country.Code" draggable @dragstart="startDrag($event, country)">
        </zone-card>
      </div>

      <div id="zone5" class="two columns countryColumn u-max-full-width" 
      @drop='onDrop($event, 5)'        
      @dragover.prevent
      @dragenter.prevent>
        <p style="text-align: center;">Zone 5</p>
        <zone-card
          class="country" v-for="country in zone5" :country="country" :key="country.Code" draggable @dragstart="startDrag($event, country)">
        </zone-card>
      </div>

      <div id="zone6" class="two columns countryColumn u-max-full-width" 
      @drop='onDrop($event, 6)'        
      @dragover.prevent
      @dragenter.prevent>
        <p style="text-align: center;">Zone 6</p>
        <zone-card
          class="country" v-for="country in zone6" :country="country" :key="country.Code" draggable @dragstart="startDrag($event, country)">
        </zone-card>
      </div>

      <div id="zone7" class="two columns countryColumn u-max-full-width" 
      @drop='onDrop($event, 7)'        
      @dragover.prevent
      @dragenter.prevent>
        <p style="text-align: center;">Zone 7</p>
        <zone-card
          class="country" v-for="country in zone7" :country="country" :key="country.Code" draggable @dragstart="startDrag($event, country)">
        </zone-card>
      </div>

      <div id="zone8" class="two columns countryColumn u-max-full-width" 
      @drop='onDrop($event, 8)'        
      @dragover.prevent
      @dragenter.prevent>
        <p style="text-align: center;">Zone 8</p>
        <zone-card
          class="country" v-for="country in zone8" :country="country" :key="country.Code" draggable @dragstart="startDrag($event, country)">
        </zone-card>
      </div>
      
      <div id="zone9" class="two columns countryColumn u-max-full-width" 
      @drop='onDrop($event, 9)'        
      @dragover.prevent
      @dragenter.prevent>
        <p style="text-align: center;">Zone 9</p>
        <zone-card
          class="country" v-for="country in zone9" :country="country" :key="country.Code" draggable @dragstart="startDrag($event, country)">
        </zone-card>
      </div>
      </div>
    </div>
  `,
  components: {
    ZoneContainer,
    ZoneCard,
    AlertBox
  },
  props: [],
    data() {
      return {
          countries: [],
          isActive: true,
          showSuccess: false,
          showError: false,
          activeBtn: "button",
          alertData: {  header:"success", message: "Countries were updated succesfully!", style:"success"}
      }
    },
    created: function() {
        axios.get(store.state.baseURL + "countries/getallcountries")
        .then((res)=> {
          store.state.countries = res.data;

          this.countries = res.data
        })
    },
    computed: {
      zone0: function(){
        return this.countries.filter(x => x.Zone == 0)
      },
      zone1: function(){
        return this.countries.filter(x => x.Zone == 1)
      },
      zone2: function(){
        return this.countries.filter(x => x.Zone == 2)
      },
      zone3: function(){
        return this.countries.filter(x => x.Zone == 3)
      },
      zone4: function(){
        return this.countries.filter(x => x.Zone == 4)
      },
      zone5: function(){
        return this.countries.filter(x => x.Zone == 5)
      },
      zone6: function(){
        return this.countries.filter(x => x.Zone == 6)
      },
      zone7: function(){
        return this.countries.filter(x => x.Zone == 7)
      },
      zone8: function(){
        return this.countries.filter(x => x.Zone == 8)
      },
      zone9: function(){
        return this.countries.filter(x => x.Zone == 9)
      }
    },
    methods: {
      onDrop (evt, list) {
        this.handleButtons();
        const itemID = evt.dataTransfer.getData('itemID')
        const item = this.countries.find(item => item.Code == itemID)
        item.Zone = list

      },
      handleButtons(){
        this.isActive = false,
        this.activeBtn = "button button-primary"
      },
      updateCountries(){
        var countriesToUpdate = this.zone0.concat(this.zone1, this.zone2,this.zone3,this.zone4,this.zone5,this.zone6,this.zone7,this.zone8,this.zone9)
        let req = {
          countries: countriesToUpdate, 
          user: "test"
        }
        axios.post(store.state.baseURL + "countries/updateCountryZones", req)
        .then((res)=> {
            console.log(res.status)
            if(res.status == 200){
              this.showSuccess = true;
              this.showError = false;
            }else{
              this.showSuccess = false;
              this.showError = true;
            }
        })
      }
    }
  };


  