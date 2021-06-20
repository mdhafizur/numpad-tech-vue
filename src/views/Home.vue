<template>
  <div>
    <Carousel />
    <div class="first-block">
      “Manage operations across your growing business in real time.”
    </div>
    <div class="second-block">Solutions for Your Business</div>
    <section class="cards" style="padding:20px;">
      <div class="columns">
        <div class="column">
          First Column
          <div class="card">
            <div class="card-content">
              <div class="content">
                Lorem ipsum leo risus, porta ac consectetur ac, vestibulum at
                eros. Donec id elit non mi porta gravida at eget metus. Cum
                sociis natoque penatibus et magnis dis parturient montes,
                nascetur ridiculus mus. Cras mattis consectetur purus sit amet
                fermentum.
              </div>
            </div>
          </div>
        </div>
        <div class="column">
          Second column
          <div class="card">
            <div class="card-content">
              <div class="content">
                Lorem ipsum leo risus, porta ac consectetur ac, vestibulum at
                eros. Donec id elit non mi porta gravida at eget metus. Cum
                sociis natoque penatibus et magnis dis parturient montes,
                nascetur ridiculus mus. Cras mattis consectetur purus sit amet
                fermentum.
              </div>
            </div>
          </div>
        </div>
        <div class="column">
          Third column
          <div class="card">
            <div class="card-content">
              <div class="content">
                Lorem ipsum leo risus, porta ac consectetur ac, vestibulum at
                eros. Donec id elit non mi porta gravida at eget metus. Cum
                sociis natoque penatibus et magnis dis parturient montes,
                nascetur ridiculus mus. Cras mattis consectetur purus sit amet
                fermentum.
              </div>
            </div>
          </div>
        </div>
        <div class="column">
          Fourth column
          <div class="card">
            <div class="card-content">
              <div class="content">
                Lorem ipsum leo risus, porta ac consectetur ac, vestibulum at
                eros. Donec id elit non mi porta gravida at eget metus. Cum
                sociis natoque penatibus et magnis dis parturient montes,
                nascetur ridiculus mus. Cras mattis consectetur purus sit amet
                fermentum.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Carousel from '../components/Carousel';

export default {
  name: 'Home',
  props: {
    msg: String,
  },
  components: {
    Carousel,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
