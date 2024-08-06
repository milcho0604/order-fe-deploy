<template>
    <v-container>
        <v-row justify="center">
            <!-- 화면 크기가 small 이상일때 : sm -->
            <!-- 화면 크기가 medium 이상일때 : md -->
            <v-col cols="12" sm="4" md="6">
                <v-card>
                    <v-card-title class="text-h5 text-center">회원가입</v-card-title>
                    <v-card-text>
                        <v-form @submit.prevent="memberCreate">
                            <v-text-field label="이름" v-model="name" required prepend-icon="mdi-account"></v-text-field>
                            <v-text-field label="이메일" v-model="email" type="email" required prepend-icon="mdi-email"></v-text-field>
                            <v-text-field label="비밀번호" v-model="password" type="password" required prepend-icon="mdi-lock"></v-text-field>
                            <v-text-field label="핸드폰번호" v-model="phone" prepend-icon="mdi-phone"></v-text-field>
                            <v-text-field label="도시" v-model="city" prepend-icon="mdi-city">
                            </v-text-field>
                            <v-text-field label="상세주소" v-model="street" prepend-icon="mdi-home"></v-text-field>
                            <v-text-field label="우편번호" v-model="zipcode" prepend-icon="mdi-mailbox"></v-text-field>
                            <v-text-field label="나이" v-model="age" prepend-icon="mdi-calendar"></v-text-field>
                            <v-btn type="submit" color="primary">회원가입</v-btn>
                        </v-form>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            name: "",
            email: "",
            password: "",
            phone: "",
            city: "",
            street: "",
            zipcode: "",
            age: ""
        }
    },
    methods: {
        async memberCreate() {
            try {
                const registerData = {
                    name: this.name,
                    email: this.email,
                    password: this.password,
                    phone: this.phone,
                    address: {
                        city: this.city,
                        street: this.street,
                        zipcode: this.zipcode
                    },
                    age: this.age
                };
                await axios.post(`${process.env.VUE_APP_API_BASE_URL}/member/create`, registerData);
                this.$router.push("/");
            } catch (e) {
                const error_message = e.response.data.status_message;
                console.log(error_message); 
                console.error(error_message);
                alert(error_message);
            }
        }
    }
}
</script>
