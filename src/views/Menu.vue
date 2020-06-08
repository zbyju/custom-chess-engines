<template>
  <div class="Menu">
    <el-container>
      <el-row>
        <el-form ref="form" :model="form" label-width="120px">
          <el-form-item label="Chess Engine">
            <el-select
              v-model="form.engine"
              placeholder="Please select the engine you want to play againts"
            >
              <el-option label="Random moves" value="random"></el-option>
              <el-option label="TurEng" value="tureng"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">
              Play
            </el-button>
          </el-form-item>
        </el-form>
      </el-row>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "Menu",
  data() {
    return {
      form: {
        engine: ""
      }
    };
  },
  methods: {
    onSubmit() {
      console.log(this.form);
      this.$router.push({
        name: "Play",
        params: { config: this.form }
      });
    }
  }
};
</script>
