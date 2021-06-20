<template>
  <div>
    Contact Us

    <div class="container">
      <section>
        <form v-on:submit.prevent="submit">
          <div class="field">
            <label class="label">Name</label>
            <div class="control">
              <input
                v-model.trim="form.name"
                :class="!$v.form.name.required ? 'input is-danger' : 'input'"
                type="text"
                placeholder="Text input"
              />
            </div>
          </div>
          <div class="help is-danger" v-if="!$v.form.name.required">
            Field is required
          </div>

          <div class="field">
            <label class="label">Email</label>
            <div class="control has-icons-left has-icons-right">
              <input
                :class="
                  !$v.form.email.required || !$v.form.email.email
                    ? 'input is-danger'
                    : 'input'
                "
                type="email"
                placeholder="Email input"
                value="hello@"
                v-model.trim="form.email"
              />
              <span class="icon is-small is-left">
                <i class="fas fa-envelope"></i>
              </span>
              <span class="icon is-small is-right">
                <i class="fas fa-exclamation-triangle"></i>
              </span>
            </div>
            <div class="help is-danger" v-if="!$v.form.email.required">
              Field is required
            </div>
            <div class="help is-danger" v-if="!$v.form.email.email">
              Use a valid email
            </div>
          </div>

          <div class="field">
            <label class="label">Phone No</label>
            <div class="control">
              <input
                v-model.trim="form.phone"
                :class="!$v.form.phone.required ? 'input is-danger' : 'input'"
                type="tel"
                placeholder="Text input"
              />
            </div>
          </div>
          <div class="help is-danger" v-if="!$v.form.phone.required">
            Field is required
          </div>

          <div class="field">
            <label class="label">Message</label>
            <div class="control">
              <textarea
                v-model.trim="form.message"
                :class="
                  !$v.form.message.required ? 'textarea is-danger' : 'textarea'
                "
                placeholder="Textarea"
              ></textarea>
            </div>
          </div>
          <div class="help is-danger" v-if="!$v.form.message.required">
            Field is required
          </div>

          <div class="field is-grouped">
            <div class="control">
              <button class="button is-link">Submit</button>
            </div>
          </div>
        </form>
      </section>
    </div>
  </div>
</template>

<script>
import { required, email } from 'vuelidate/lib/validators';

export default {
  name: 'ContactUs',
  props: {},

  data() {
    return {
      form: {
        name: 'Enter Name',
        email: 'h@gmail.com',
        phone: '01',
        message: 'msg',
        datetime: new Date(),
      },
    };
  },

  validations: {
    form: {
      name: { required },
      email: { required, email },
      phone: { required },
      message: { required },
    },
  },

  methods: {
    submit() {
      console.log('new');
      this.$v.$touch();

      if (this.$v.$pendding || this.$v.$error) return;
    },
  },
};
</script>

<style scoped>
.container {
  width: 40%;
}
</style>


