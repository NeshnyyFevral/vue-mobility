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
        Button colors
      </h3>
      <div :class="$style.example">
        <UserButton
          :variant="ButtonVariant.PRIMARY"
          :size="ButtonSize.SMALL"
          :class="$style.userButton"
        >
          PRIMARY
        </UserButton>
        <UserButton
          :variant="ButtonVariant.ERROR"
          :size="ButtonSize.SMALL"
          :class="$style.userButton"
        >
          ERROR
        </UserButton>
        <UserButton
          :variant="ButtonVariant.INFO"
          :size="ButtonSize.SMALL"
          :class="$style.userButton"
        >
          INFO
        </UserButton>
        <UserButton
          :variant="ButtonVariant.DEFAULT"
          :size="ButtonSize.SMALL"
          :class="$style.userButton"
        >
          DEFAULT
        </UserButton>
        <UserButton
          :variant="ButtonVariant.SUCCESS"
          :size="ButtonSize.SMALL"
          :class="$style.userButton"
        >
          SUCCESS
        </UserButton>
        <UserButton
          :variant="ButtonVariant.WARNING"
          :size="ButtonSize.SMALL"
          :class="$style.userButton"
        >
          WARNING
        </UserButton>
      </div>
    </div>
    <div :class="$style.item">
      <h3 :class="$style.exampleTitle">
        Money stat
      </h3>
      <div :class="$style.example">
        <MoneyStat
          :class="$style.moneyStat"
          :monotone="MonotoneVariant.UP"
        >
          <template #main>
            <span :class="$style.mainMoneyLarge">
              $69.93
            </span>
          </template>
          <template #icon>
            <arrowUp :class="$style.iconMoneyLarge" />
          </template>
          <template #after>
            <span :class="$style.afterMoneyLarge">
              18%
            </span>
          </template>
        </MoneyStat>
        <MoneyStat
          :class="$style.moneyStat"
          :monotone="MonotoneVariant.DOWN"
        >
          <template #main>
            <span :class="$style.mainMoneyNormal">
              $132.15
            </span>
          </template>
          <template #icon>
            <arrowDown :class="$style.iconMoneyNormal" />
          </template>
          <template #after>
            <span :class="$style.afterMoneyNormal">
              23%
            </span>
          </template>
        </MoneyStat>
        <MoneyStat
          :class="$style.moneyStat"
          :monotone="MonotoneVariant.UP"
        >
          <template #main>
            <span :class="$style.mainMoney">
              $40.293
            </span>
          </template>
          <template #icon>
            <arrowUp :class="$style.iconMoney" />
          </template>
          <template #after>
            <span :class="$style.afterMoney">
              7%
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
        <TotalStat
          :class="$style.totalStat"
          :monotone="MonotoneVariant.UP"
        >
          <template #main>
            <span :class="$style.mainTotalLarge">
              53.12k
            </span>
          </template>
          <template #after>
            <span :class="$style.afterTotalLarge">
              +34%
            </span>
          </template>
        </TotalStat>
        <TotalStat
          :class="$style.totalStat"
          :monotone="MonotoneVariant.DOWN"
        >
          <template #main>
            <span :class="$style.mainTotalNormal">
              333.12k
            </span>
          </template>
          <template #after>
            <span :class="$style.afterTotalNormal">
              -17%
            </span>
          </template>
        </TotalStat>
        <TotalStat
          :class="$style.totalStat"
          :monotone="MonotoneVariant.DOWN"
        >
          <template #main>
            <span :class="$style.mainTotal">
              99.12k
            </span>
          </template>
          <template #after>
            <span :class="$style.afterTotal">
              -12%
            </span>
          </template>
        </TotalStat>
      </div>
    </div>
    <div :class="$style.item">
      <h3 :class="$style.exampleTitle">
        Chip sizes
      </h3>
      <div :class="$style.example">
        <Chip
          :variant="ChipVariant.PRIMARY"
          :size="ChipSize.LARGE"
          :class="$style.chip"
        >
          Large
        </Chip>
        <Chip
          :variant="ChipVariant.PRIMARY"
          :size="ChipSize.NORMAL"
          :class="$style.chip"
        >
          Normal
        </Chip>
        <Chip
          :variant="ChipVariant.PRIMARY"
          :size="ChipSize.SMALL"
          :class="$style.chip"
        >
          Small
        </Chip>
      </div>
    </div>
    <div :class="$style.item">
      <h3 :class="$style.exampleTitle">
        Chip colors
      </h3>
      <div :class="$style.example">
        <Chip
          :variant="ChipVariant.PRIMARY"
          :size="ChipSize.NORMAL"
          :class="$style.chip"
        >
          Primary
        </Chip>
        <Chip
          :variant="ChipVariant.INFO"
          :size="ChipSize.NORMAL"
          :class="$style.chip"
        >
          Info
        </Chip>
        <Chip
          :variant="ChipVariant.WARNING"
          :size="ChipSize.SMALL"
          :class="$style.chip"
        >
          Warning
        </Chip>
        <Chip
          :variant="ChipVariant.DEFAULT"
          :size="ChipSize.SMALL"
          :class="$style.chip"
        >
          Default
        </Chip>
        <Chip
          :variant="ChipVariant.ERROR"
          :size="ChipSize.SMALL"
          :class="$style.chip"
        >
          Error
        </Chip>
        <Chip
          :variant="ChipVariant.SUCCESS"
          :size="ChipSize.SMALL"
          :class="$style.chip"
        >
          Success
        </Chip>
      </div>
    </div>
    <div :class="$style.item">
      <h3 :class="$style.exampleTitle">
        Avatar sizes
      </h3>
      <div :class="$style.example">
        <Avatar
          :size="AvatarSize.EXTRALARGE"
          :variant="AvatarVariant.PRIMARY"
          :corner="AvatarCorner.DEFAULT"
          :transparency="AvatarTransparency.DEFAULT"
          :class="$style.avatar"
        >
          NE
        </Avatar>
        <Avatar
          :size="AvatarSize.LARGE"
          :variant="AvatarVariant.PRIMARY"
          :corner="AvatarCorner.DEFAULT"
          :transparency="AvatarTransparency.DEFAULT"
          :class="$style.avatar"
        >
          IA
        </Avatar>
        <Avatar
          :size="AvatarSize.NORMAL"
          :variant="AvatarVariant.PRIMARY"
          :corner="AvatarCorner.DEFAULT"
          :transparency="AvatarTransparency.DEFAULT"
          :class="$style.avatar"
        >
          OW
        </Avatar>
        <Avatar
          :size="AvatarSize.SMALL"
          :variant="AvatarVariant.PRIMARY"
          :corner="AvatarCorner.DEFAULT"
          :transparency="AvatarTransparency.DEFAULT"
          :class="$style.avatar"
        >
          GH
        </Avatar>
      </div>
    </div>
    <div :class="$style.item">
      <h3 :class="$style.exampleTitle">
        Avatar colors
      </h3>
      <div :class="$style.example">
        <Avatar
          :size="AvatarSize.LARGE"
          :variant="AvatarVariant.PRIMARY"
          :corner="AvatarCorner.DEFAULT"
          :transparency="AvatarTransparency.DEFAULT"
          :class="$style.avatar"
        >
          NE
        </Avatar>
        <Avatar
          :size="AvatarSize.LARGE"
          :variant="AvatarVariant.ERROR"
          :corner="AvatarCorner.DEFAULT"
          :transparency="AvatarTransparency.DEFAULT"
          :class="$style.avatar"
        >
          IA
        </Avatar>
        <Avatar
          :size="AvatarSize.LARGE"
          :variant="AvatarVariant.INFO"
          :corner="AvatarCorner.DEFAULT"
          :transparency="AvatarTransparency.DEFAULT"
          :class="$style.avatar"
        >
          OW
        </Avatar>
        <Avatar
          :size="AvatarSize.LARGE"
          :variant="AvatarVariant.DEFAULT"
          :corner="AvatarCorner.DEFAULT"
          :transparency="AvatarTransparency.DEFAULT"
          :class="$style.avatar"
        >
          GH
        </Avatar>
        <Avatar
          :size="AvatarSize.LARGE"
          :variant="AvatarVariant.SUCCESS"
          :corner="AvatarCorner.DEFAULT"
          :transparency="AvatarTransparency.DEFAULT"
          :class="$style.avatar"
        >
          PL
        </Avatar>
        <Avatar
          :size="AvatarSize.LARGE"
          :variant="AvatarVariant.WARNING"
          :corner="AvatarCorner.DEFAULT"
          :transparency="AvatarTransparency.DEFAULT"
          :class="$style.avatar"
        >
          WC
        </Avatar>
      </div>
    </div>
    <div :class="$style.item">
      <h3 :class="$style.exampleTitle">
        Avatar transparency
      </h3>
      <div :class="$style.example">
        <Avatar
          :size="AvatarSize.LARGE"
          :variant="AvatarVariant.PRIMARY"
          :corner="AvatarCorner.DEFAULT"
          :transparency="AvatarTransparency.LIGHT"
          :class="$style.avatar"
        >
          NE
        </Avatar>
        <Avatar
          :size="AvatarSize.LARGE"
          :variant="AvatarVariant.ERROR"
          :corner="AvatarCorner.DEFAULT"
          :transparency="AvatarTransparency.LIGHT"
          :class="$style.avatar"
        >
          IA
        </Avatar>
        <Avatar
          :size="AvatarSize.LARGE"
          :variant="AvatarVariant.INFO"
          :corner="AvatarCorner.DEFAULT"
          :transparency="AvatarTransparency.LIGHT"
          :class="$style.avatar"
        >
          OW
        </Avatar>
        <Avatar
          :size="AvatarSize.LARGE"
          :variant="AvatarVariant.DEFAULT"
          :corner="AvatarCorner.DEFAULT"
          :transparency="AvatarTransparency.LIGHT"
          :class="$style.avatar"
        >
          GH
        </Avatar>
        <Avatar
          :size="AvatarSize.LARGE"
          :variant="AvatarVariant.SUCCESS"
          :corner="AvatarCorner.DEFAULT"
          :transparency="AvatarTransparency.LIGHT"
          :class="$style.avatar"
        >
          PL
        </Avatar>
        <Avatar
          :size="AvatarSize.LARGE"
          :variant="AvatarVariant.WARNING"
          :corner="AvatarCorner.DEFAULT"
          :transparency="AvatarTransparency.LIGHT"
          :class="$style.avatar"
        >
          WC
        </Avatar>
      </div>
    </div>
    <div :class="$style.item">
      <h3 :class="$style.exampleTitle">
        Avatar rounted
      </h3>
      <div :class="$style.example">
        <Avatar
          :size="AvatarSize.LARGE"
          :variant="AvatarVariant.PRIMARY"
          :corner="AvatarCorner.ROUNTED"
          :transparency="AvatarTransparency.DEFAULT"
          :class="$style.avatar"
        >
          NE
        </Avatar>
        <Avatar
          :size="AvatarSize.LARGE"
          :variant="AvatarVariant.ERROR"
          :corner="AvatarCorner.ROUNTED"
          :transparency="AvatarTransparency.DEFAULT"
          :class="$style.avatar"
        >
          IA
        </Avatar>
        <Avatar
          :size="AvatarSize.LARGE"
          :variant="AvatarVariant.INFO"
          :corner="AvatarCorner.ROUNTED"
          :transparency="AvatarTransparency.DEFAULT"
          :class="$style.avatar"
        >
          OW
        </Avatar>
        <Avatar
          :size="AvatarSize.LARGE"
          :variant="AvatarVariant.DEFAULT"
          :corner="AvatarCorner.ROUNTED"
          :transparency="AvatarTransparency.DEFAULT"
          :class="$style.avatar"
        >
          GH
        </Avatar>
        <Avatar
          :size="AvatarSize.LARGE"
          :variant="AvatarVariant.SUCCESS"
          :corner="AvatarCorner.ROUNTED"
          :transparency="AvatarTransparency.DEFAULT"
          :class="$style.avatar"
        >
          PL
        </Avatar>
        <Avatar
          :size="AvatarSize.LARGE"
          :variant="AvatarVariant.WARNING"
          :corner="AvatarCorner.ROUNTED"
          :transparency="AvatarTransparency.DEFAULT"
          :class="$style.avatar"
        >
          WC
        </Avatar>
      </div>
    </div>
    <div :class="$style.item">
      <h3 :class="$style.exampleTitle">
        Avatar rectangle
      </h3>
      <div :class="$style.example">
        <Avatar
          :size="AvatarSize.LARGE"
          :variant="AvatarVariant.PRIMARY"
          :corner="AvatarCorner.RECTANGLE"
          :transparency="AvatarTransparency.DEFAULT"
          :class="$style.avatar"
        >
          NE
        </Avatar>
        <Avatar
          :size="AvatarSize.LARGE"
          :variant="AvatarVariant.ERROR"
          :corner="AvatarCorner.RECTANGLE"
          :transparency="AvatarTransparency.DEFAULT"
          :class="$style.avatar"
        >
          IA
        </Avatar>
        <Avatar
          :size="AvatarSize.LARGE"
          :variant="AvatarVariant.INFO"
          :corner="AvatarCorner.RECTANGLE"
          :transparency="AvatarTransparency.DEFAULT"
          :class="$style.avatar"
        >
          OW
        </Avatar>
        <Avatar
          :size="AvatarSize.LARGE"
          :variant="AvatarVariant.DEFAULT"
          :corner="AvatarCorner.RECTANGLE"
          :transparency="AvatarTransparency.DEFAULT"
          :class="$style.avatar"
        >
          GH
        </Avatar>
        <Avatar
          :size="AvatarSize.LARGE"
          :variant="AvatarVariant.SUCCESS"
          :corner="AvatarCorner.RECTANGLE"
          :transparency="AvatarTransparency.DEFAULT"
          :class="$style.avatar"
        >
          PL
        </Avatar>
        <Avatar
          :size="AvatarSize.LARGE"
          :variant="AvatarVariant.WARNING"
          :corner="AvatarCorner.RECTANGLE"
          :transparency="AvatarTransparency.DEFAULT"
          :class="$style.avatar"
        >
          WC
        </Avatar>
      </div>
    </div>
  </div>
</template>

<script setup>
import arrowDown from '@/assets/icons/chevron-down.svg';
import arrowUp from '@/assets/icons/chevron-up.svg';
import Avatar, {
  AvatarCorner, AvatarSize, AvatarTransparency, AvatarVariant,
} from '@/components/Avatar.vue';
import Chip, { ChipSize, ChipVariant } from '@/components/Chip.vue';
import MoneyStat from '@/components/MoneyStat.vue';
import TotalStat, { MonotoneVariant } from '@/components/TotalStat.vue';
import UserButton, { ButtonSize, ButtonVariant } from '@/components/UI/Button.vue';
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

  .userButton + .userButton,
  .moneyStat + .moneyStat,
  .totalStat + .totalStat,
  .chip + .chip,
  .avatar + .avatar {
    margin-left: 20px;
  }

  .mainMoney {
    font-size: 16px;
    line-height: 16px;
  }

  .afterMoney {
    font-size: 12px;
    line-height: 12px;
  }

  .iconMoney {
    position: relative;
    top: 8px;
    left: 2px;
    width: 20px;
    height: 20px;
  }

  .mainMoneyLarge {
    font-size: 36px;
    line-height: 36px;
  }

  .afterMoneyLarge {
    font-size: 24px;
    line-height: 24px;
  }

  .iconMoneyLarge {
    position: relative;
    top: 11px;
    left: 5px;
    width: 30px;
    height: 30px;
  }

  .mainMoneyNormal {
    font-size: 24px;
    line-height: 24px;
  }

  .afterMoneyNormal {
    font-size: 12px;
    line-height: 12px;
  }

  .iconMoneyNormal {
    position: relative;
    top: 8px;
    left: 2px;
    width: 20px;
    height: 20px;
  }

  .mainTotal {
    font-size: 20px;
  }

  .afterTotal {
    font-size: 12px;
  }

  .mainTotalLarge {
    font-size: 32px;
  }

  .afterTotalLarge {
    font-size: 20px;
  }

  .mainTotalNormal {
    font-size: 26px;
  }

  .afterTotalNormal {
    font-size: 16px;
  }

</style>
