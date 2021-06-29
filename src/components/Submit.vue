<template>
  <a-form :label-col="labelCol" :wrapper-col="wrapperCol">
    <a-form-item label="账号" v-bind="validateInfos.name">
      <a-input
          v-model:value="modelRef.name"
          @blur="validate('name', { trigger: 'blur' }).catch(() => {})"
      />
    </a-form-item>

    <a-form-item label="密码" v-bind="validateInfos.pasw">
      <a-input
          v-model:value="modelRef.pasw"
          type="password"
          @blur="validate('pasw', { trigger: 'blur' }).catch(() => {})"
      />
    </a-form-item>

    <a-form-item :wrapper-col="{ span: 14, offset: 4 }">
      <a-button type="primary" @click.prevent="onSubmit">Create</a-button>
      <a-button style="margin-left: 10px" @click="resetFields">Reset</a-button>
    </a-form-item>
  </a-form>
</template>
<script lang="ts">
import {defineComponent, reactive, toRaw} from 'vue';
import {useForm} from '@ant-design-vue/use';
import axios from 'axios'
import qs from 'qs'
export default
defineComponent({
  data() {
    return {
      form: {
        name: '',
        pasw: '',
      },
    }
  },
  setup() {
    const modelRef = reactive({
      name: '',
      pasw: '',
    });
    const rulesRef = reactive({
      name: [
        {
          required: true,
          message: 'Please input Activity nam22e',
        },
      ],
      pasw: [
        {
          required: true,
          message: 'Please input Activity name22',
        },
      ],
    });
    const {resetFields, validate, validateInfos} = useForm(modelRef, rulesRef);
    const onSubmit = () => {
      validate()
          .then(() => {
            console.log(toRaw(modelRef));
            // 这里会有跨域问题，原因就是json数据也会导致跨域
            axios.post("http://localhost:9999/vue/post_book", qs.stringify({
              name: toRaw(modelRef).name,
              password: toRaw(modelRef).pasw
            })).then((res) => {
              console.log(res);
            }).catch((res) => {
              console.log(res);
            });
          })
          .catch(err => {
            console.log('error', err);
          });
    };
    return {
      labelCol: {span: 4},
      wrapperCol: {span: 14},
      validate,
      validateInfos,
      resetFields,
      modelRef,
      onSubmit,
    };
  },
});
</script>

