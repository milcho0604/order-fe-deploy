<template>
    <div class="container">
        <h1>환영합니다!</h1>
        <p>당신을 위한 백엔드 스쿨입니다.</p>
        <button @click="handleClick">Click Me</button>
    </div>
</template>

<script>
export default {
    methods: {
        handleClick() {
            alert('Button clicked!');
        }
    }
}
</script>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: #f5f5f5;
    font-family: Arial, sans-serif;
    color: #333;
}

h1 {
    margin-bottom: 20px;
    font-size: 2.5em;
    color: #4a90e2;
}

p {
    margin-bottom: 30px;
    font-size: 1.2em;
}

button {
    padding: 10px 20px;
    font-size: 1em;
    color: #fff;
    background-color: #4a90e2;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

button:hover {
    background-color: #357ab7;
}
</style>
