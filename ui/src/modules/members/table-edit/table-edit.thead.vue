<script>

export default {
  props: {
    showTeam: Boolean,
  },
};
</script>
<template>
  <thead class="members-table-thead">
  <tr>
    <th class="text-center" rowspan="2" v-if="showTeam">
      Команда
    </th>
    <th class="text-center" rowspan="2">
      Фамилия
    </th>
    <th class="text-center" rowspan="2">
      Имя
    </th>
    <th class="text-center" rowspan="2">
      Отчество
    </th>
    <th class="text-center members-table--border-bottom" colspan="2">
      Пол
    </th>
    <th class="text-center" rowspan="2">
      Дата рождения
    </th>
    <th class="text-center" rowspan="2">
      Поступил на работу
    </th>
    <th class="text-center" rowspan="2">
      Должность
    </th>
    <th class="text-center" rowspan="2">
      Вид спорта
    </th>
    <th class="text-center members-table--border-bottom" colspan="3">
      Мед. допуск
    </th>
    <th class="text-center" rowspan="2">
      Фото
    </th>
    <th class="text-center" rowspan="2">
      Допущен ГСК
    </th>
    <th class="text-center" rowspan="2">
    </th>
  </tr>
  <tr>
    <th class="text-center">
      М
    </th>
    <th class="text-center">
      Ж
    </th>
    <th class="text-center">
      общ
    </th>
    <th class="text-center">
      инд
    </th>
    <th class="text-center"></th>
  </tr>
  </thead>
</template>
<style lang="scss">
.members-table-thead {
  tr th {
    padding: 0 8px !important;
    border-bottom: 1px solid #ddd;
    background: #eee;
  }

  tr th {
    border-right: 1px solid #ddd;
  }
}
</style>
