<template>
    <v-container>
        <v-row justify="center">
            <v-col cols="12" md="8">
                <v-card>
                    <v-card-title class="text-center text-h5">
                        상품등록
                    </v-card-title>
                    <v-card-text>
                        <v-form @submit.prevent="productCreate">
                            <v-text-field
                            label="상품명"
                            v-model="name"
                            required
                            >
                            </v-text-field>
                            <v-text-field
                            label="카테고리"
                            v-model="category"
                            required
                            >
                            </v-text-field>
                            <v-text-field
                            label="가격"
                            v-model="price"
                            required>
                            </v-text-field>
                            <v-text-field
                            label="재고수량"
                            v-model="stock_quantity"
                            required
                            >
                            </v-text-field>
                            <v-file-input
                            label="상품이미지"
                            accept="image/*"
                            @change="fileUpdate"
                            required
                            >
                            </v-file-input>
                        </v-form>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
    export default{
        data(){
            return{
                name: "",
                category: "",
                price: null,
                stock_quantity: null,
            }
        },
        methods:{
            productCreate(){

            },
            fileUpdate(event){
                this.productImage = event.target.files[0];
            }
        }
    }
</script>