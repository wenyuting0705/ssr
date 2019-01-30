<template>
  <div id="app">
    <foo/>
    <bar/>
  </div>
</template>

<script>
import Foo from './components/Foo'
import Bar from './components/Bar'
export default {
  name: 'App',
  components: {
    Foo,
    Bar
  }
}
</script>

<style>
</style>
