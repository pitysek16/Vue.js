<template>
    <ElCard class="form-card">
        <ElForm :model="formData" :rules="rules" label-position="top" ref="addItemForm">
            <ElFormItem label="Type" prop="type">
                <ElSelect class="type-select" v-model="formData.type" placeholder="Choose Type...">
                    <ElOption label="income" value="INCOME" />
                    <ElOption label="outcome" value="OUTCOME" />
                </ElSelect>
            </ElFormItem>
            <ElFormItem label="Comments" prop="comment">
                <ElInput v-model="formData.comment" />
            </ElFormItem>
            <ElFormItem label="Value" prop="value">
                <ElInput v-model.number="formData.value" />
            </ElFormItem>
            <ElButton type="primary" @click="onSubmit">Submit</ElButton>
        </ElForm>
    </Elcard>
</template>

<script>
export default {
    name: "Form",
    data: () => ({
        formData: {
            type: 'INCOME',
            comment: '',
            value: 0
        },
        rules: {
            type: [{ required: true, message: 'Please select type', trigger: 'blue' }],
            comment: [{ required: true, message: 'Please input comment', trigger: 'change' }],
            value: [
                { required: true, message: 'Please input value', trigger: 'change' },
                { type: 'number', message: 'Value must be a number', trigger: 'change' }
            ]
        }
    }),
    methods: {
        onSubmit(){
            this.$refs.addItemForm.validate(valid => {
                if(valid) {
                    this.$emit('submitForm', { ...this.formData });
                    this.$refs.addItemForm.resetFields();
                }
            });
        }
    }
}
</script>

<style scoped>
.form-card {
    max-width: 500px;
    margin: 30px auto;
    text-align: left
}
.type-select {
    width: 100%
}
</style>