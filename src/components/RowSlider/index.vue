<template>
  <section class="fadeInUp">
    <div
        class="carousel-container"
        @mouseenter="hover = true"
        @mouseleave="handleMouseLeave"
        @mousedown="handleMouseDown"
    >
      <!-- 左箭头 -->
      <button v-if="hover && showArrows" class="arrow left" @click="prevSlide">
        <i class="fas fa-chevron-left"></i>
      </button>

      <div class="carousel-wrapper" ref="wrapper">
        <div
            ref="track"
            class="carousel-track"
            :style="{ transform: `translateX(-${translateX}px)` }"
        >
          <div class="carousel-item-info" v-for="(item, index) in items" :key="index"   :style="{ flex: `0 0 ${100 / visibleCount}%` }">
            <slot :item="item" :hasDragged="hasDragged"></slot>
           </div>
        </div>
      </div>

      <!-- 右箭头 -->
      <button v-if="hover && showArrows" class="arrow right" @click="nextSlide">
        <i class="fas fa-chevron-right"></i>
      </button>
    </div>
  </section>
</template>

<script>


export default {
  props: {
    items: { type: Array, required: true },
    showArrows: { type: Boolean, default: true },
    visibleCount: { type: Number, default: 4 } // 默认显示 4 个商品
  },
  data() {
    return {
      currentIndex: 0,
      itemWidthPx: 0,
      translateX: 0,
      autoScrollTimer: null,
      hover: false,
      isDragging: false,
      hasDragged: false,
      dragStartX: 0,
      dragStartTranslateX: 0,
    };
  },
  mounted() {
    this.$nextTick(() => {
      if (this.$refs.wrapper) {
        this.itemWidthPx = this.$refs.wrapper.clientWidth / this.visibleCount;
        this.updateTranslateX();
        this.startAutoScroll();
      }
    });
  },
  beforeDestroy() {
    this.stopAutoScroll();
    document.removeEventListener('mousemove', this.handleMouseMove);
    document.removeEventListener('mouseup', this.handleMouseUp);
  },
  methods: {
    nextSlide() {
      const max = this.items.length - this.visibleCount;
      this.currentIndex = this.currentIndex < max ? this.currentIndex + 1 : 0;
      this.updateTranslateX();
    },
    prevSlide() {
      const max = this.items.length - this.visibleCount;
      this.currentIndex = this.currentIndex > 0 ? this.currentIndex - 1 : max;
      this.updateTranslateX();
    },
    startAutoScroll() {
      this.autoScrollTimer = setInterval(this.nextSlide, 5000);
    },
    stopAutoScroll() {
      clearInterval(this.autoScrollTimer);
      this.autoScrollTimer = null;
    },
    updateTranslateX() {
      this.translateX = this.currentIndex * this.itemWidthPx;
    },
    handleMouseDown(e) {
      e.preventDefault();
      this.isDragging = true;
      this.hasDragged = false;
      this.dragStartX = e.clientX;
      this.dragStartTranslateX = this.translateX;

      this.stopAutoScroll();
      document.body.style.cursor = 'grabbing';
      this.$refs.track.style.transition = 'none';

      document.addEventListener('mousemove', this.handleMouseMove);
      document.addEventListener('mouseup', this.handleMouseUp);
    },
    handleMouseMove(e) {
      if (!this.isDragging) return;
      const moveX = e.clientX - this.dragStartX;
      if (Math.abs(moveX) > 5) this.hasDragged = true;
      let nextTranslate = this.dragStartTranslateX - moveX;
      const maxTranslate = (this.items.length - this.visibleCount) * this.itemWidthPx;
      this.translateX = Math.min(Math.max(nextTranslate, 0), maxTranslate);
    },
    handleMouseUp() {
      if (!this.isDragging) return;
      this.currentIndex = Math.round(this.translateX / this.itemWidthPx);
      this.$refs.track.style.transition = 'transform 0.5s ease';
      this.updateTranslateX();
      this.isDragging = false;
      this.hasDragged = false;

      document.body.style.cursor = '';
      document.removeEventListener('mousemove', this.handleMouseMove);
      document.removeEventListener('mouseup', this.handleMouseUp);

      this.startAutoScroll();
    },
    handleMouseLeave() {
      this.hover = false;
      if (this.isDragging) this.handleMouseUp();
    },
    handleImgClick(obj) {
      this.$emit('img-click', obj);
    },
    addWish(item) {
      this.$emit('add-wish', item);
    },
    addCart(item) {
      this.$emit('add-cart', item);
    }
  }
};
</script>

<style scoped>
.carousel-container {
  position: relative;
  overflow: hidden;
  width: 100%;
  user-select: none;
}
.carousel-wrapper {
  overflow: hidden;
}
.carousel-track {
  display: flex;
  transition: transform 0.5s ease;
  will-change: transform;
  cursor: grab;
}
.carousel-track:active {
  cursor: grabbing;
}
.carousel-item-info {

  box-sizing: border-box;
  padding: 10px;
  text-align: center;
}
.product {
  position: relative;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
}
._img {
  max-height: 300px;
  overflow: hidden;
  position: relative;
}
._img:hover .wish_list {
  display: block;
}
._img:hover img {
  transform: scale(1.05);
}
img {
  width: 100%;
  transition: all 0.3s ease-in-out;
  user-select: none;
  -webkit-user-drag: none;
 //pointer-events: none;
}
.wish_list {
  position: absolute;
  bottom: 0;
  color: #fff;
  background: #000;
  width: 100%;
  padding: .5rem 1rem;
  display: none;
  z-index: 1;
}
.product-title {
  font-weight: bold;
  margin-bottom: .5rem;
}
.price {
  margin-bottom: .5rem;
}
.rate {
  display: flex;
  justify-content: center;
  margin: .5rem 0;
}
.add_cart {
  display: inline-block;
  padding: .4rem 1rem;
  font-size: .8rem;
}
.new, .sale {
  position: absolute;
  top: 10px;
  left: 10px;
  height: 55px;
  width: 55px;
  border-radius: 50%;
  font-weight: bold;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
}
.new {
  background: #E3A51E;
}
.sale {
  background: #cd201f;
}
.arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: #E3A51E;
  border: none;
  font-size: 24px;
  cursor: pointer;
  padding: 10px;
  z-index: 10;
  height: 50px;
  width: 50px;
  color: #fff;
}
.arrow.left {
  left: 10px;
}
.arrow.right {
  right: 10px;
}
</style>
