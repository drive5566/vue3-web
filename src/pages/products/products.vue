<script setup>
import { computed, ref, onMounted  } from 'vue'
import { useRoute  } from 'vue-router'

const item = ref([
    {
        brand: 'JACKALL',
        img: '/public/img/MAIN-SABULL HB SHAD-28g - 複製.jpg',
        productName: 'JACKALL SABULL HB SHAD 28g [路亞硬餌] [灘拋用]',
        sold: 50,
        price: 470,
        id: 1
    },
    {
        brand: 'JACKALL',
        img: '/public/img/MAIN-JETTROW-35g - 複製.jpg',
        productName: 'JACKALL JETTROW 35g [路亞助投器套組] [類水球釣組]',
        sold: 6540,
        price: 500,
        id: 2
    },
    {
        brand: 'JACKALL',
        img: '/public/img/MAIN-JETTROW-45g - 複製.jpg',
        productName: 'JACKALL JETTROW 45g [路亞助投器套組] [類水球釣組]',
        sold: 230,
        price: 550,
        id: 3
    },
    {
        brand: 'JACKALL',
        img: '/public/img/MAIN-JETTROW BUDDY - 複製.jpg',
        productName: 'JACKALL JETTROW BUDDY [類弓角] [阿兵哥釣組]',
        sold: 10,
        price: 170,
        id: 4
    },
    {
        brand: 'HR',
        img: '/public/img/MAIN-斬怪-SMC-564XXH - 複製.jpg',
        productName: 'HR SLASH MONSTER 斬怪 SMC-564XXH',
        sold: 150,
        price: 5700,
        id: 5
    },
    {
        brand: 'SHIMANO',
        img: '/public/img/MAIN-GL-111V-BB-X 白 - 複製.jpg',
        productName: 'SHIMANO GL-111V BB-X白 [五指手套]',
        sold: 74,
        price: 2300,
        id: 7
    },
    {
        brand: 'DAIWA',
        img: '/public/img/MAIN-送行李箱-七海刀狼 - 複製.jpg',
        productName: 'DAIWA 七海刀郎 0.6號-50 SMT [磯釣竿]',
        sold: 40,
        price: 23000,
        id: 8
    },
    {
        brand: 'GAMAKATSU',
        img: '/public/img/MAIN-GM-3721 - 複製.jpg',
        productName: 'GAMAKATSU GM-3721 [夾克]',
        sold: 10,
        price: 3600,
        id: 9
    },
    {
        brand: 'JACKALL',
        img: '/public/img/MAIN-BIG BACKER FIT VIB-70mm - 複製.jpg',
        productName: 'JACKALL BIG BACKER FIT VIB 70 [小顫泳]',
        sold: 6,
        price: 280,
        id: 10
    },
    {
        brand: 'MEGABASS',
        img: '/public/img/MAIN-IxI FURIOUS 1.5 - 複製.jpg',
        productName: 'MEGABASS IXI FURIOUS 1.5 [路亞硬餌]',
        sold: 9,
        price: 480,
        id: 11
    },
    {
        brand: 'OSP',
        img: '/public/img/MAIN-FLAT CAP - 複製.jpg',
        productName: 'O.S.P FLAT CAP [釣魚帽]',
        sold: 9,
        price: 1300,
        id: 12
    },
    {
        brand: 'EVERGREEN',
        img: '/public/img/MAIN-GRASS RIPPER-1 4oz - 複製.jpg',
        productName: 'EVERGREEN GRASS RIPPER 1/4oz',
        sold: 0,
        price: 230,
        id: 13
    },
])



let filterItem = ref([...item.value])

const uniqueBrands = computed(() => {
    const brands = new Set();
    item.value.forEach((item) => {
        brands.add(item.brand);
    });
    return Array.from(brands);
});

const SelectBrand = (brand) => {
    const newItem = item.value.filter(item => item.brand == brand)
    filterItem.value = newItem
    return filterItem.value
}



const tabFlag = ref('button1')
const tabChange = (button) => {
    if (tabFlag.value !== button) {
        tabFlag.value = button
    }
    console.log(tabFlag.value);
}

const route = useRoute()
const brandId = route.query.id
console.log(brandId);



onMounted(() => {
    brandId !== undefined?SelectBrand(brandId):''
})


</script>

<template>
    <div class="wrap">
        <div class="left-nav-container">
            <ul>
                <li v-for="(uniqueBrand, index) of uniqueBrands" :key="index" 
                >
                    <span class="material-symbols-outlined">arrow_right</span>
                    <a  @click="SelectBrand(uniqueBrand)" >{{ uniqueBrand }}</a>
                </li>
            </ul>
        </div>
        <div class="main-container">
            <div class="tab-container">
                <ul>
                    <li>
                        <span class="material-symbols-outlined" @click="tabChange('button1')"
                            :class="{ 'tab-change': tabFlag == 'button1' }">
                            view_cozy</span>
                    </li>
                    <li>
                        <span class="material-symbols-outlined" @click="tabChange('button2')"
                            :class="{ 'tab-change': tabFlag == 'button2' }">
                            view_list</span>
                    </li>
                    <li>
                        <label for="products-select"></label>
                        <select id="products-select">
                            <option value="new">最新上架</option>
                            <option value="Price-low-to-high">價格低至高</option>
                            <option value="Price-high-to-low">價格高至低</option>
                            <option value="hot">熱銷商品</option>
                        </select>
                    </li>
                </ul>
            </div>
            <div class="products-container" 
            :class="{'products-list-style': tabFlag == 'button2',
                     'products-cozy-style': tabFlag == 'button1'}"
                     >
                <div class="products-card" v-for="filterItems of filterItem" :key="filterItems.id">
                    <img :src="filterItems.img" alt="">
                    <div class="products-content">
                        <h3>{{ filterItems.productName }}</h3>
                        <p class="sold">已售出 {{ filterItems.sold }}</p>
                        <p class="price">NT.{{ filterItems.price }}</p>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<style lang="scss" scoped>
.wrap {
    max-width: 1270px;
    justify-content: space-between;
    display: flex;
    margin: 0 auto;
    padding: 30px;

    .main-container {
        flex-grow: 1;
    }

    .tab-container {
        ul {
            display: flex;
            justify-content: end;
            gap: 20px;
        }

        span {
            border: 1.5px solid rgb(149, 149, 149);
            padding: 3px;
            cursor: pointer;
        }

        select {
            width: 100px;
            height: 32px;
        }
    }

    .products-container {
        margin: 20px 0 0 20px;
        gap: 20px;

        .products-card {
            gap: 30px;
            padding: 10px;


        }

        img {
            max-width: 100%;
            width: 226px;
            border: 1px solid hsl(0, 0%, 0%, .2);
            margin-bottom: 10px;
        }

        h3 {
            font-size: 20px;
        }

        .sold {
            font-size: 14px;
            margin: 10px 0;
        }

        .price {
            color: red;
            font-size: 20px;
        }
    }


    .left-nav-container {
        padding-left: 50px;

        li {
            display: flex;
            align-items: center;

        }

        a {
            margin: 10px 0;
            font-size: 14px;
            color: rgb(40, 42, 113);
            font-weight: 600;
            cursor: pointer;

        }
        .aaa{
        color: #FFF;
    }
    }
}
    .tab-change {
        color: #FFF;
        background-color: rgb(54, 54, 88);
    }

    .products-list-style {
        .products-card {
            display: flex;
        }
    }

    .products-cozy-style {
        display: flex;
        flex-wrap: wrap;

        .products-card {
            width: 30%;
        }
    }
</style>