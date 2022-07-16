<template>
  <div :class="$style.container">
    <div :class="$style.item">
      <h3 :class="$style.exampleTitle">
        Button sizes
      </h3>
      <div :class="$style.example">
        <UserButton
          :variant="ButtonVariant.PRIMARY"
          :size="ButtonSize.LARGE"
          :class="$style.userButton"
        >
          LARGE
        </UserButton>
        <UserButton
          :variant="ButtonVariant.PRIMARY"
          :size="ButtonSize.NORMAL"
          :class="$style.userButton"
        >
          NORMAL
        </UserButton>
        <UserButton
          :variant="ButtonVariant.PRIMARY"
          :size="ButtonSize.SMALL"
          :class="$style.userButton"
        >
          SMALL
        </UserButton>
      </div>
    </div>
    <div :class="$style.item">
      <h3 :class="$style.exampleTitle">
        Money stat
      </h3>
      <div :class="$style.example">
        <MoneyStat :monotone="MonotoneVariant.UP">
          <template #main>
            <span :class="$style.mainMoney">
              $132.15
            </span>
          </template>
          <template #icon>
            <arrowUp :class="$style.iconMoney" />
          </template>
          <template #after>
            <span :class="$style.afterMoney">
              18%
            </span>
          </template>
        </MoneyStat>
      </div>
    </div>
    <div :class="$style.item">
      <h3 :class="$style.exampleTitle">
        Total stat
      </h3>
      <div :class="$style.example">
        <TotalStat :monotone="MonotoneVariant.DOWN">
          <template #main>
            <span :class="$style.mainTotal">
              $333.12k
            </span>
          </template>
          <template #after>
            <span :class="$style.afterTotal">
              +12%
            </span>
          </template>
        </TotalStat>
        <TotalStat :monotone="MonotoneVariant.DOWN">
          <template #main>
            <span :class="$style.mainTotal">
              $333.12k
            </span>
          </template>
          <template #after>
            <span :class="$style.afterTotal">
              +12%
            </span>
          </template>
        </TotalStat>
      </div>
    </div>
    <div :class="$style.item">
      <h3 :class="$style.exampleTitle">
        Chip
      </h3>
      <div :class="$style.example">
        <Chip
          :variant="ChipVariant.PRIMARY"
          :size="ChipSize.SMALL"
          :class="$style.chip"
        >
          Party
        </Chip>
      </div>
    </div>
  </div>
</template>

<script setup>
import arrowUp from '@/assets/icons/chevron-up.svg';
import Chip, { ChipSize, ChipVariant } from '@/components/Chip.vue';
import MoneyStat from '@/components/MoneyStat.vue';
import TotalStat, { MonotoneVariant } from '@/components/TotalStat.vue';
import UserButton, { ButtonSize, ButtonVariant } from '@/components/UI/Button.vue';
// import GlobalColors from '@/styles/colors';
</script>

<style module lang="scss">

  .container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 20px;
    width: 1400px;
    margin: 0 auto;
  }

  .example {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .exampleTitle {
    margin-bottom: 15px;
    font-size: 30px;
    color: #616161;
  }

  .item {
    height: 150px;
    padding: 15px;
    background-color: #fff;
    border-radius: 12px;
  }

  .userButton + .userButton {
    margin-left: 20px;
  }

  .mainMoney {
    font-size: 16px;
    line-height: 16px;
  }

  .afterMoney {
    font-size: 12px;
    line-height: 12px;
    color: currentColor;
  }

  .iconMoney {
    position: relative;
    top: 8px;
    left: 1px;
    width: 20px;
    height: 20px;
  }

  .mainTotal {
    font-size: 20px;
  }

  .afterTotal {
    font-size: 12px;
  }

  .chip {
    font-size: 14px;
  }
</style>
