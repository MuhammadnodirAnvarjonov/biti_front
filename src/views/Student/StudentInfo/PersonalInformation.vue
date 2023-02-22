<template>
  <div>
    <ogohlantirish class="ogoh" />
    <div  class="personal">
      <n-space vertical class="about">
          <n-table
            type="small"
            :bordered="false"
            striped
            :single-line="false"
          >
            <tbody>
              <tr>
                <td colspan="2" class="sarlovha">Passport ma'lumoti</td>
              </tr>
              <tr>
                <td class="sarlovha-matin">Fuqarolik</td>
                <td class="sarlovha-item">O‘zbekiston Respublikasi fuqarosi</td>
              </tr>
              <tr>
                <td class="sarlovha-matin">Pasport raqami</td>
                <td class="sarlovha-item">	AC123456</td>
              </tr>
              <tr>
                <td class="sarlovha-matin">JSHSHIR-kod	</td>
                <td class="sarlovha-item">1234456789</td>
              </tr>
              <tr>
                <td class="sarlovha-matin">Familiya</td>
                <td class="sarlovha-item">ANVARJONOV</td>
              </tr>
              <tr>
                <td class="sarlovha-matin">Ismi</td>
                <td class="sarlovha-item">MUXAMMADNODIR</td>
              </tr>
              <tr>
                <td class="sarlovha-matin">Otasining ismi	</td>
                <td class="sarlovha-item">ADHAMJON O‘G‘LI</td>
              </tr>
              <tr>
                <td class="sarlovha-matin">Tug‘ilgan sana	</td>
                <td class="sarlovha-item">09-11-2001</td>
              </tr>
              <tr>
                <td class="sarlovha-matin">Jins	</td>
                <td class="sarlovha-item">Erkak</td>
              </tr>
              <tr>
                <td class="sarlovha-matin">Millat</td>
                <td class="sarlovha-item">O‘zbeklar</td>
              </tr>
            </tbody>
          </n-table>
        </n-space>
    </div>
  </div>
</template>
<script setup>
import ogohlantirish from '../../../components/ogohlantirish.vue'
</script>

<style scoped lang="scss">
.ogoh{
        position: absolute;
        left: 250px;
        top: 100px;
        z-index: 100;
    }
.personal{
   width: 100%;
   min-height: 450px;
  .about{
    border-top: 4px solid #3C8DBC;
    border-bottom: 4px solid #3C8DBC;
    border-left: 1px solid rgb(231, 228, 228);
    border-right: 1px solid rgb(231, 228, 228);
   width: 65%;
   border-radius: 5px;
   margin-left: 50px;
}
}


.sarlovha{
  font-size: 17px;
  font-weight: 500;
  padding: 10px;
  font-family: sans-serif;
  
}
.sarlovha-matin{
  font-size: 13px;
  font-weight: 700;
  width: 50%;
  padding: 12px 7px;
  font-family:sans-serif;
}
.sarlovha-item{
  font-size: 13px;
  padding: 12px 7px;
  font-family: sans-serif;
}
</style>
