<template>
  <div class="text-gray-300">
    <h1 class="text-gray-300 text-sm font-thin text-center p-5">
      &copy; {{ currentYear }} Oluwaferanmi John
    </h1>
    <!-- <p>Current Year: </p> -->
    <!-- <p>Current Month: {{ currentMonth }}</p> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentDate: new Date()
    }
  },
  computed: {
    currentYear() {
      return this.currentDate.getFullYear()
    },
    currentMonth() {
      const monthNames = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
      ]
      const monthIndex = this.currentDate.getMonth()
      return monthNames[monthIndex]
    }
  }
}
</script>

<style scoped></style>
