import { ref } from 'vue'

export default {
  setup() {
    const message = ref('Hello Vue!')

    return {
      message,
    }
  },

  template: `
    <div class="prose text-clifford">
      <h1>{{ message }}</h1>

      <p>
        Lorem ipsum odor amet, consectetuer adipiscing elit. Molestie etiam
        tortor molestie ut vestibulum montes hendrerit. Praesent gravida class
        quis mauris phasellus. Euismod dui viverra faucibus velit sodales
        gravida. Porttitor pulvinar nibh lacus ad sollicitudin cras euismod.
        Volutpat eu massa suscipit; luctus urna vivamus convallis. Eleifend
        sociosqu etiam facilisi phasellus molestie aliquet fringilla. Proin
        senectus fringilla rutrum nulla inceptos; sagittis pretium pulvinar.
      </p>

      <p>
        Conubia litora quisque tellus ligula dolor fermentum curae ullamcorper.
        Turpis nec curabitur imperdiet lacus ornare mus. Curabitur class dis
        varius neque proin rhoncus eu. Lacinia amet sociosqu mollis, est quam
        curabitur sed nibh. Molestie rutrum pulvinar morbi sollicitudin id amet.
        Condimentum sodales ridiculus proin turpis parturient odio. Ligula
        rhoncus commodo leo pellentesque diam commodo nunc. Duis at efficitur
        maximus maximus et aptent. At vitae senectus enim, curabitur suspendisse
        luctus sociosqu. Senectus fermentum aliquam montes ridiculus
        sollicitudin placerat.
      </p>
    </div>

    `,
}
