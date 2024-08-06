<template>

      <h1>watch 예제</h1>
      <div>count: {{ count }}</div>
      <button @click="incrementCount">increaseCount</button>
      <h1>update 예제</h1>
      <div>message: {{ message }}</div>
      <button @click="updateMessage">updateMessage</button>

  </template>
  
  <script>
  export default {
    data() {
      return {
        count: 0,
        message : "hello java"
      };
    },
    watch: {
      // 인지하고자 하는 변수값과 일치하는 함수명 사용
      count() {
        // 인지하고자 하는 변수값과 일치되는 함수명
        alert("count값이 변경되었습니다.");
      }
    },
    updated() {
      // DOM 객체의 변경사항을 인지하는 hook 함수
      alert("dom 요소 변경")
    },
    methods: {
      incrementCount() {
        this.count++;
      },
      updateMessage(){
        this.message = "hello vue"
      }
    },
  };
  </script>
  