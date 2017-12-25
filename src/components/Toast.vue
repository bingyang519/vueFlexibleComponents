<template>
    <transition name="fade">
        <div class="Toast" v-if="toastShow">
            <div
                class="box"
                :style="positionTop"
            >
                <span
                    :class="iconClass"
                    :style="iconBg"
                    v-if="iconIsShow"
                ></span>
                <p
                    v-if="message"
                >{{message}}</p>
            </div>
        </div>
    </transition>
</template>
<script>
export default {
    name: 'Toast',
    props: {
        message: { // 提示内容
            type: String,
        },
        toastShow: { // 是否显示
            type: Boolean,
            default: false
        },
        iconClass: { // 背景图片
            type: String,
        },
        iconImage: { // 自定义背景图片
        },
        duration: { // 定时器
            type: Number,
            default: 1500
        },
        position: { // 弹出框位置
            type: String,
            default: '50%'
        }
    },
    computed: {
        // 用于判断显示框位置
        positionTop() {
            return {
                top: this.position
            }
        },
        // 自定义父组件传过来的背景图片
        iconBg() {
            if (this.iconImage) {
                return {
                    backgroundImage: `url(${this.iconImage})`
                }
            } else {
                return;
            }
        },
        // 用于判断icon是否显示
        iconIsShow() {
            if (this.iconClass == 'success') {
                return true;
            } else if (this.iconClass == 'close') {
                return true;
            } else if (this.iconClass == 'warning') {
                return true;
            } else if (this.iconImage) {
                return true;
            } else {
                return false;
            }
        }
    },
    watch: {
        toastShow() {
            // 监听toast显示，向父组件派发事件
            if (this.toastShow) {
                if (this.duration < 0) {
                    this.$emit('toastClose');
                } else {
                    setTimeout(()=>{
                        this.$emit('update:toastShow', false) // 利用了.sync达到双向数据绑定
                        this.$emit('toastClose');
                    }, this.duration)
                }
            }
        }
    }
}
</script>
<style scoped>
.fade-enter-active{
    transition:all .3s ease;
}
.fade-leave-active{
    transition:all 0 ease;
}
.fade-enter,
.fade-leave-to{
    opacity: 0;
}
.Toast{
    width: 100%;
    height: 100%;
    position: fixed;
    top:0;
    left:0;
    background:transparent;
    z-index:9999;
}
.Toast .box{
    position: absolute;
    top:50%;
    left: 50%;
    transform: translate(-50%,-50%);
    z-index: 10000;
    max-width: 80%;
    background:rgba(0,0,0,0.7);
    padding:20px 60px;
    border-radius: 10px;
}

.Toast .box p{
    font-size: 28px;/*px*/
    color:#fff;
    line-height: 1.5;
    text-align: center;
}
.Toast .box span{
    width: 120px;
    height: 120px;
    display: block;
    margin: 30px auto 20px;
    background: no-repeat center center;
    background-size: 100% 100%;
}
.Toast .box span.success{
    background-image: url('data:image/png;base64,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');
}
.Toast .box span.close{
    background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAQAAABpN6lAAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAADdcAAA3XAUIom3gAAAAHdElNRQfhDBQJACw2ThgiAAAHnElEQVR42u1dz2tURxz/vEWLaHb1oAkWIpGAEUQhaNqAENQl9F8oajykJ42aeDEEekikIPRiTA49CUkbseQgJiAKhQQUD+1BBUFN6o9DSdR6MCRRsHH308NuNps3M2/f25nZt8vbgb28mfl+v5/Pzu/5zoyDkgXGsQd70YRGbEMC8ewPWMRS9reAl5jBc8w6S6WyyrEOezMO4xi+RRO+DpBtHjP4E1N44HyqUAK4EYdxFMfwDb7SEPMf/sIUpvHAWbFLhFnwLRzme5oM7znMlrBx+YFezz4+NQo9PzxlH+vDxqgGf4DjTFkDvxpSHOeBsLGK4Fs4wbR18KshzYkyqhBs5d2SQc8Pd9mqb71mL8Ba/IxTgaR8wixeYxHLWMISlgHUII44apDAbuzB5iDq8SsuOv+GRABjOI2fsM1X4teYxmM8xwz+cegh00E9mtCEZhzFbl+SF/AjfnHSOiQUB7+VD30U03mOsZMNRWnYzR94nW99aHloojIEMS3G/oLt/TJHmWTMgK52/sblAtpS7NfX5deknZwqYM4UO7jFqM4anvKhdWcp4LfznYcRad7kIWu6D/GWZ2f7ju12wTsc8Cj6XzjGfVYNAMD9vOFhQ4oDtDW/4QaOeLD/B5tsg89Zso/THpaMcIMNpZs4qVQ5z+9LBT5nz3G+UdozyU2m1W3lPWXBH2Si1PABgAkO8ovCqnvcalJVHR8rFM2xLQzwOcvaOKew7DHrTCnZqoR/h9vDhA8A3M47SgpMlAJuUhT+FfZaa2+DWeiwlyuKiqDbFnCDoulbZDJs4OvsTHJR0Rzq9Ah0FB3fWzaHDVmwtVkxaxjRKKcckIp8wcaw4UqtbeQLqb0DxQpsl464zLWu5imQ91apogbI3Ckd878oX/hZCmSl4F3gaRJj0rnX2/Is/Ossb5S2BVMBJ8vsl7b8Zdf0SW1vlvYI/UFEtEpq/0p5dXye9icl44KU71UjxqSLXb1hwwpEQa8EwUOf1YBdksx3ymPU55sARzpA7vKTtZYfhIxz4Y/5A1OwXTJN+sDawhnFsd+XcGd8RVPQJpksjxTK1CpZcxsMG0rRFAwKWNIFmkLJJtebcJY7jBCQkKwa3fXK0CJpOI6HDUOLguMSROptVU4IiafDhqBNwbSAaUKV9IBQ/1P2l7mtE7BPGNSlFf4FHBe4uhG2+UYo+F3ANS5LVi9han/YxhshYL+kZOccbdYGhyfhHihOOk/CNt5EcJ5g0vUphpMiT6Jrk+YeH2t9jLv8yKnjDk0JhwRsT91JxA5wSktlG5+RJGf15pBMcpYk+UxvNCpZ3VjfGXJYSNChBX+tPUnzdNFyTufV3pQOBewQ8A3nR28U3BqXdfb3s/++JgXr4JPkMw2LtgguFu+5cS36iMDPqIayHYK0NM8ElnJGMivRaAs4Kkg7shYpLn9r1FzWURYCUcAzUhkaC7JMCtLWlst53xU1r+dvk2243MHPckQmf5c0/6yWTTHOu+TdX43azM+uqDEdVQCTCkcWXxQo4Kd11yQ55pL4mRmfRLYLyjr1VEkasNVwtmDOswr4RfclOcmdgtTMhgkvCxENusqKpcAefIANgtzLmQj3IOGVvjJA2ZCR55Q5zilyBO5DFPJfueRmBnvC4uE1M+qCUmAbPsBrLslzABgPXk8DqOxSgDovpDyvSOm77/BhjUhxHDwofDTqbOiPglLAlzb3B8ETwsddJpUqGzayO5eiW5HCYFkEAO4SNJwAL7k+fTS/B+RNQangA3T40aXjEnjd9emRabWARwPXwx5FzDl9rRI7Hrm0XAdvuz7dtKHYg4ISwgd406XndgzubY9FO6qdYXT7TtztDPtOGyy40SViiLs+LVtSDWfIJwXdzpAtGwR0cbEEWDy27Ayhp2CiHovwRXSSEmD13LZztQAFPc5Vm/oFdJISYK0K5Ci4oIy8YBm+iC5RqoNGZRtiQrtYY1che3BFGXmF/nuK4oIb3WJMrBWhwQeAQcsUCC2eWAIsElAQfoaC8z5EmSJAUgKsVQFf8AHgqkUK3OgkJcCSQ4xv+BkKLA2FxXFvDAuuT/6OLJuCf0HRKQ5ZosCNbqE002HVjK8spsP2F0Q84ZeSAvmCiO0lMRX8slkSs7so6gt+qSiQLopaXRYPtNoT0rK4xY2RwItdYW2M2NkaU8Evw60xG5ujRcG3S4F6c9T89vh3CvjluT1uwUHi7+Lhe1Bgy0GiglxkNPwOvV1kKsVJSocATyepqLvJGXeUPJZneiU4SlpwlT1aYa6ykXeWBtgnJLplwvxyCLwlYOsTE0X0wER+wmgfmakemkLkj81VD04i8kdnq4enEfnj89ULFBD5KzSql6gg8tfoAJG/SKl6lRYif5kaEPnr9IDIX6hYvVITkb9UFYj8tbpA5C9WBiJ/tTYQ+cvVgchfrw9E/oEFIPJPbGQNiPIjK1kzwnhmZws7yuSZHaDkDy0lOVpWDy1lDbP/1FYDOzkmuDbJgsZTW5F/bC3yz+0ZCJX94KIpEqL85GaOhCg/upojIcrP7ubRUEEPL0f+6e3q4+u2CcijIo492IsmNGIbEohnf8AilrK/BbzEDJ5j1rF6jUN++B9BTI7wkkV8JwAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxNy0xMi0yMFQwOTowMDo0NCswMTowMJVji5sAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTctMTItMjBUMDk6MDA6NDQrMDE6MDDkPjMnAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAABJRU5ErkJggg==');
}
.Toast .box span.warning{
    background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAQAAABpN6lAAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAADdcAAA3XAUIom3gAAAAHdElNRQfhDBQIOhVNICRkAAAHnklEQVR42u1dTWhTWRg9L/bHqknrLx2YqWgXAUdcFFSECrYKShe66MKVLooIg4i7SrsogkI3gtBF7U6Y0Y2g0o4rcZzCaEE7ji6cRZBUdKSDSn9Maoc2kjOLpElrvvvyktz7XvTl66rv555zvtx333333u+7FlwzhhBGGGE0owFBhBBEECEAMcQRRwxxzCKKCCKIWDG3WFnGZa9FK9qxB2F8V8Bt/yKCJ3iAh9anr9QBrEEr2tGG3aguoZgExvEAv+OhtWjWEXrF7+Mgp6jTpjjIfV7rciJ9G/v4Uqv05faSfdzmtUa1+L0cYdKY+CVLcoR7vdaaK76N941LX2732ea15qz4IxxzVfySjfGI19rBJt7xRPyS3WGTd+Kr2M05T+WT5By7WVW8iqL7AdyPq/ixsFvwNtXPQxSziKf/gGD6rwHN6b7i9wXy+hs/WX+U9GsWKL6K/QW09wmO8SLbuMZx+WvYxoscY8IxRpL9pdSDwuQ38ZFDWtMcYgeDRSMF2cEhTjtEe+RKe8BjjggtcpidrNWCWMtODnPRkcOPmRW/ilcc0HjHHm7Ujr2RPXznAP0KV5mSv5q388K/5lnWGfsB6niWr/NyuM3VJsDrOZoHeJJdLOXLzxmPanZxMg+TUdbrhm3kc1vIzxxgyLT4DJsQB/jZls9zNuoE3M6oLdxjtrglPsOphY9tOU1wuy6oRk7YACXZy4Db8gGAAfba9kaiWmoB620rf5xHvRCfYXeUcdsHodS2gKttm74J7vRSPgBwp239HC3pjcBVti++UW7yWj4AcJPtj3S7hH6BbbdnyPwrzzHPag7ZML1SbLHHlEUmeMZr0Tlsz9h8OhXTQWaTss8/w4NeyxUZH+SMgvF0wZ9JrFJ+8SXKU37aBapa8KjAj2X2K6tT2VX+FbzPKHn3F1LMfmUHY8hriXm5q5rDJPc7LaKKLxSFjJZPy69kX618Kb5w+BiwW1HARHm89/Py36TsGnU7ub1JMdIb977X59gFOxUd5DkHbwPFOH9Sf5+fm3met3iL57lZe9lHFa3YnXw3HlFUnl7tFDv4PlP6e3ZoL79XocR+NkkxyfVY9wcvtzK2AiHGrZoRAorxgjG7m9rEWz7rH+7gtRyUa9oxWhSjRuppVcUM74BuagAjOSgRAygDop77qsv3ipdPmhjrE5qopAGUkGL4VF5fwBHx4i79xAAJyAhOl6hpRLp0m/jieG2m7+eaA6rFeYRkdqFNtnU/Ic7IXrYSJoi5ZVYCl6XDOJHrK2lp0ztTszxu1QCAdeKE2ssvL9snPis9Zki56QCAPaK2lYvuOChcsqh/itMTB2wUZ5YHl19SIy5rHDZFyV0HABwW4KZYAyw1gq3YINz3szlKLpukZANasw5oFy6YwV2veWuzu5gRjrZnHSD1jm9aC17z1mXWAm4Kh5dUc63YSGj/QF1u7rYBADvERn5t6uRh4WSi+KVNZemAoDhgfjj1CEgtwLgVN0nIbbPiGBcOt6ccsEc49ZvXlLWbpGhPygFh4dQDr/lqN0lRGLAYwsecE8Q6a94kG+mJt4zGL3EN5oTPvfqA+Pu/NSvfC7Pm8VY4HJYdYGB4qgxMUlVxQADNvnZAcwANwuGo11yNmKSqIQCpxzfrNVcjJqkKBiANen9TvUBbVSG5BvjHAUHfO8DiAmpyDteaDlV2vycIsAa5IxyLnixzLicLQEpVYHQswDOTVMUC8pPhNVfXHBCvOKDyCEg1oME4mf8cHNFtkqp4QOwgNsO0PXdwRLdJqmYD4idCOF9ZJduvDo7oNklVNCB/JRsncxnPVvz/TJzHN++ACLhbGC9/Y5wMuJ43Mng3uN4FxDeC0t0eDYqmYX5AC4C/rH9cwFIMigIQV1KVT4oSXQ6Q1kBOpuYFpFagvVCAsjdJUSTlgCfCqbINiynaJEUp5V5Mjrpt6slReDM97roDlNPjAcD6JM6cGo8JZoA7eJInucOF4GtJzXgmVR8vCf6Z1pMBRCn/OD9ksD7wuFGsWjEG8lL2gnZpwQI7jRGyeD0H7TrN5TbsFPVl3wtuL5PjOZHQOWN4Nsvkli5xcaEkt3JedMC87qiRNJ7tQsml5ucX4c5qnDZBCIcgr0CuwyEjeKfFpJ5fKnZvsTSvUmVXDaDlWSydfQFJdWALTumnZJNdtpC8s07tFLYIR3PVuhcwwQvKGnBBO5bzgAnrlbg0tkkILSjV/iziTLF2AlKs6F3rleQtl4KmWMWnItJT3QnxCgyaci9sjru4kIOywF3acQoLm3M1cPLAFxHeEzygHaPwwEn3QmcBrmMf73GKU7zHPq7TXn4xobNuBk+btiKDp90Mnzcqv9jw+UoCBfg+hUYliQp8n0YH8H0ipUoqLfg+mRrg+3R6gO8TKlZSasL3SVUB36fVBQA22uaVLt/EyhPa0mtzu201K8/U2lFtqbUB3ydXB3yfXh/w/QYLgO+32EgT8fMmK2lC/t5mB/i2NlqqbLVVvH0bm62V6gQ/b7eXcYKfN1zMOMHPW25mnODnTVczTvDztrvL3PAVbbzs+623K5uvm3bAMleE0v28ZjQgiBCCCCIEIIY44oghjllEU31FK1YynEP7HzGHSf/QA5LTAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDE3LTEyLTIwVDA4OjU4OjIxKzAxOjAwviKYiAAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxNy0xMi0yMFQwODo1ODoyMSswMTowMM9/IDQAAAAZdEVYdFNvZnR3YXJlAHd3dy5pbmtzY2FwZS5vcmeb7jwaAAAAAElFTkSuQmCC');
}
</style>
