import store from '../store.js';
import ZoneHandling from '../components/ZoneComponents/ZoneHandling.js'
export default {
    template: `
    <div>
      <h3 class="container">Zone Handling</h3>
      <zone-handling></zone-handling>
    </div>
  `,
    data() {
      return {
          rates: []
      };
    },
    components: {
      ZoneHandling
    }
  };