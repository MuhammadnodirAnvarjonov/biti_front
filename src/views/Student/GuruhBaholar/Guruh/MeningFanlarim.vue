<template>
    <div class="fanlar">
        <ogohlantirish class="ogoh" />
        <div class="header">
            <div class="icon">
                <n-icon size="40px" class="file">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 3v4a1 1 0 0 0 1 1h4"></path><path d="M18 17h-7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4l5 5v7a2 2 0 0 1-2 2z"></path><path d="M16 17v2a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h2"></path></g></svg>
                </n-icon>
                <div class="kurs">611-19</div>
            </div>
            <div class="semestr">
                <p class="title">Semestr</p>
                <ul>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                    <li>5</li>
                    <li>6</li>
                    <li>7</li>
                    <li>8</li>
                </ul>
            </div>
        </div>
        <div class="fan-list">
            <div class="fan-item">
                 <div class="header">
                    <p class="header_title">IT/Mutaxassislik tanlov fani (Taqsimlangan algoritmlar va tizimlar)</p>
                    <p class="span">Tanlov | 180 soat | 6.0 kredit</p>
                 </div>
                <div class="resurs">
                    <p class="title">
                        Resurslar soni
                    </p>
                    <p class="count">
                        15
                    </p>
                </div>
                <div class="resurs">
                    <p class="title">
                        Resurslar soni
                    </p>
                    <p class="count">
                        15
                    </p>
                </div>
                <div class="resurs">
                    <p class="title">
                        Resurslar soni
                    </p>
                    <p class="count">
                        15
                    </p>
                </div>
            </div>
            <div class="fan-item">
                 <div class="header">
                    <p class="header_title">IT/Mutaxassislik tanlov fani (Taqsimlangan algoritmlar va tizimlar)</p>
                    <p class="span">Tanlov | 180 soat | 6.0 kredit</p>
                 </div>
                <div class="resurs">
                    <p class="title">
                        Resurslar soni
                    </p>
                    <p class="count">
                        15
                    </p>
                </div>
                <div class="resurs">
                    <p class="title">
                        Resurslar soni
                    </p>
                    <p class="count">
                        15
                    </p>
                </div>
                <div class="resurs">
                    <p class="title">
                        Resurslar soni
                    </p>
                    <p class="count">
                        15
                    </p>
                </div>
            </div>
            <div class="fan-item">
                 <div class="header">
                    <p class="header_title">IT/Mutaxassislik tanlov fani (Taqsimlangan algoritmlar va tizimlar)</p>
                    <p class="span">Tanlov | 180 soat | 6.0 kredit</p>
                 </div>
                <div class="resurs">
                    <p class="title">
                        Resurslar soni
                    </p>
                    <p class="count">
                        15
                    </p>
                </div>
                <div class="resurs">
                    <p class="title">
                        Resurslar soni
                    </p>
                    <p class="count">
                        15
                    </p>
                </div>
                <div class="resurs">
                    <p class="title">
                        Resurslar soni
                    </p>
                    <p class="count">
                        15
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
// import {Files} from '@vicons/material'
import ogohlantirish from '../../../../components/ogohlantirish.vue'
</script>
<style lang="scss" scoped>
.ogoh{
        position: absolute;
        left: 250px;
        top: 100px;
        z-index: 100;
    }
.fanlar{
    width: 100%;
    box-sizing: border-box;
    .header{
        width: 100%;
        height: 60px;
        display: flex;
        justify-content: space-between;
        background-color: rgb(240, 238, 238);
        .semestr{
            display: flex;
            align-items: center;
            .title{
                padding: 0px;
                margin: 0px;
                margin-block: 0px;
            }
            ul{
                display: flex;
                list-style: none;
                li{
                    width: 40px;
                    background-color: #F9F9F9;
                    text-align: center;
                    height: 40px;
                    line-height: 40px;
                    margin: 0px 2px;
                    cursor: pointer;
                    border-radius: 2px;
                    margin-right: 5px;
                }
            }
        }
        .icon{
            display: flex;
            align-items: center;
            z-index: 100;
            width: 200px;
            height: 60px;
            .kurs{
                margin-left: 10px;
            }
            .file{
                background-color:aqua;
                height: 60px;
                width: 60px;
                line-height: 60px;
            }
        }
}
.fan-list{
    display: flex;
    justify-content: space-between;
    .fan-item{
        width: 31%;
        margin: 10px 5px;
        background-color: rgb(231, 227, 227);
        border-radius: 8px;
        border: 1px solid rgb(235, 231, 231);
        .header{
            background-color: #0073B7;
            color: white;
            height: 150px;
            display: block;
            padding: 10px;
            border-radius: 5px;
            .header_title{
                font-size: 20px;
                text-shadow: 0 1px 1px rgb(0 0 0 / 20%);
                font-weight: 300;
                padding: 0px;
                margin: 0px;
            }
        }
        .resurs{
            display: flex;
            justify-content: space-between;
            padding: 0px 20px;
            border-bottom: 1px solid rgb(235, 231, 231);
            background-color: white;
            color: #444;
            transition: all 0.3s ease-in-out;
                &:hover{
                    background-color: rgb(252, 246, 246);
                    cursor: pointer;
                }
            .count{
                min-width: 10px;
                padding: 0px 7px;
                font-size: 12px;
                font-weight: bold;
                line-height: 2;
                color: #fff;
                text-align: center;
                white-space: nowrap;
                vertical-align: middle;
                background-color: #777777;
                border-radius: 10px;
                cursor: pointer;
            }
            &:nth-child(4){
                border-bottom: none;
            }
        }
    }
}
}
</style>