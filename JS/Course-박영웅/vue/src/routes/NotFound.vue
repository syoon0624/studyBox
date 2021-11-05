<template>
    <h1>404 Page Not Found!!</h1>
    <RouterLink to ="/">
        메인페이지로 이동!
    </RouterLink>
    <button @click="$router.push('/')">
        메인페이지로 이동!
    </button>
</template>