<template>
  <div :class="$style.container">
    <div :class="$style.item">
      <h3 :class="$style.exampleTitle">
        Button sizes
      </h3>
      <div :class="$style.example">
        <UserButton
          v-for="size in Object.values(ButtonSize)"
          :key="size"
          :variant="ButtonVariant.PRIMARY"
          :size="size"
          :class="$style.userButton"
        >
          {{ size }}
        </UserButton>
      </div>
    </div>
    <div :class="$style.item">
      <h3 :class="$style.exampleTitle">
        Button block
      </h3>
      <div :class="$style.example">
        <UserButton
          :variant="ButtonVariant.PRIMARY"
          :size="ButtonSize.NORMAL"
          :class="$style.userButton"
          block
        >
          Button block
        </UserButton>
      </div>
    </div>
    <div :class="$style.item">
      <h3 :class="$style.exampleTitle">
        Button colors
      </h3>
      <div :class="$style.example">
        <UserButton
          v-for="variant in Object.values(ButtonVariant)"
          :key="variant"
          :variant="variant"
          :size="ButtonSize.SMALL"
          :class="$style.userButton"
        >
          {{ variant }}
        </UserButton>
      </div>
    </div>
    <div :class="$style.item">
      <h3 :class="$style.exampleTitle">
        Button borders
      </h3>
      <div :class="$style.example">
        <UserButton
          :variant="ButtonVariant.PRIMARY"
          :size="ButtonSize.SMALL"
          :class="$style.userButton"
        >
          default
        </UserButton>
        <UserButton
          :variant="ButtonVariant.PRIMARY"
          :size="ButtonSize.SMALL"
          :class="$style.userButton"
          outlined
        >
          outlined
        </UserButton>
        <UserButton
          :variant="ButtonVariant.PRIMARY"
          :size="ButtonSize.SMALL"
          :class="$style.userButton"
          unlimited
        >
          unlimited
        </UserButton>
      </div>
    </div>
    <div :class="$style.item">
      <h3 :class="$style.exampleTitle">
        Money stat positive sizes
      </h3>
      <div :class="$style.example">
        <MoneyStat
          v-for="size in Object.values(MoneyStatSize)"
          :key="size"
          :class="$style.moneyStat"
          :monotone="MoneyStatVariant.UP"
          :size="size"
        >
          <template #main>
            <span :class="$style.mainMoney">
              $69.93
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
        Money stat negative sizes
      </h3>
      <div :class="$style.example">
        <MoneyStat
          v-for="size in Object.values(MoneyStatSize)"
          :key="size"
          :class="$style.moneyStat"
          :monotone="MoneyStatVariant.DOWN"
          :size="size"
        >
          <template #main>
            <span :class="$style.mainMoney">
              $69.93
            </span>
          </template>
          <template #icon>
            <arrowDown :class="$style.iconMoney" />
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
        Total stat positive size
      </h3>
      <div :class="$style.example">
        <TotalStat
          v-for="size in Object.values(TotalStatSize)"
          :key="size"
          :class="$style.totalStat"
          :monotone="TotalStatVariant.UP"
          :size="size"
        >
          <template #main>
            <span :class="$style.mainTotal">
              53.12k
            </span>
          </template>
          <template #after>
            <span :class="$style.afterTotal">
              +34%
            </span>
          </template>
        </TotalStat>
      </div>
    </div>
    <div :class="$style.item">
      <h3 :class="$style.exampleTitle">
        Total stat negative size
      </h3>
      <div :class="$style.example">
        <TotalStat
          v-for="size in Object.values(TotalStatSize)"
          :key="size"
          :class="$style.totalStat"
          :monotone="TotalStatVariant.DOWN"
          :size="size"
        >
          <template #main>
            <span :class="$style.mainTotal">
              53.12k
            </span>
          </template>
          <template #after>
            <span :class="$style.afterTotal">
              -34%
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
          v-for="size in Object.values(ChipSize)"
          :key="size"
          :variant="ChipVariant.PRIMARY"
          :size="size"
          :class="$style.chip"
        >
          {{ size }}
        </Chip>
      </div>
    </div>
    <div :class="$style.item">
      <h3 :class="$style.exampleTitle">
        Chip colors
      </h3>
      <div :class="$style.example">
        <Chip
          v-for="variant in Object.values(ChipVariant)"
          :key="variant"
          :variant="variant"
          :size="ChipSize.NORMAL"
          :class="$style.chip"
        >
          {{ variant }}
        </Chip>
      </div>
    </div>
    <div :class="$style.item">
      <h3 :class="$style.exampleTitle">
        Avatar sizes
      </h3>
      <div :class="$style.example">
        <Avatar
          v-for="size in Object.values(AvatarSize)"
          :key="size"
          :size="size"
          :variant="AvatarVariant.PRIMARY"
          :corner="AvatarCorner.DEFAULT"
          :transparency="AvatarTransparency.DEFAULT"
          :class="$style.avatar"
        >
          NE
        </Avatar>
      </div>
    </div>
    <div :class="$style.item">
      <h3 :class="$style.exampleTitle">
        Avatar colors
      </h3>
      <div :class="$style.example">
        <Avatar
          v-for="variant in Object.values(AvatarVariant)"
          :key="variant"
          :size="AvatarSize.LARGE"
          :variant="variant"
          :corner="AvatarCorner.DEFAULT"
          :transparency="AvatarTransparency.DEFAULT"
          :class="$style.avatar"
        >
          NT
        </Avatar>
      </div>
    </div>
    <div :class="$style.item">
      <h3 :class="$style.exampleTitle">
        Avatar transparency
      </h3>
      <div :class="$style.example">
        <Avatar
          v-for="variant in Object.values(AvatarVariant)"
          :key="variant"
          :size="AvatarSize.LARGE"
          :variant="variant"
          :corner="AvatarCorner.DEFAULT"
          :transparency="AvatarTransparency.LIGHT"
          :class="$style.avatar"
        >
          PP
        </Avatar>
      </div>
    </div>
    <div :class="$style.item">
      <h3 :class="$style.exampleTitle">
        Avatar rounted
      </h3>
      <div :class="$style.example">
        <Avatar
          v-for="variant in Object.values(AvatarVariant)"
          :key="variant"
          :size="AvatarSize.LARGE"
          :variant="variant"
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
          v-for="variant in Object.values(AvatarVariant)"
          :key="variant"
          :size="AvatarSize.LARGE"
          :variant="variant"
          :corner="AvatarCorner.RECTANGLE"
          :transparency="AvatarTransparency.DEFAULT"
          :class="$style.avatar"
        >
          GB
        </Avatar>
      </div>
    </div>
    <div :class="$style.item">
      <h3 :class="$style.exampleTitle">
        Avatar image
      </h3>
      <div :class="$style.example">
        <Avatar
          v-for="corner in Object.values(AvatarCorner)"
          :key="corner"
          :size="AvatarSize.LARGE"
          :variant="AvatarVariant.DEFAULT"
          :corner="corner"
          :transparency="AvatarTransparency.DEFAULT"
          :class="$style.avatar"
        >
          <img
            src="@/assets/avatars/1.png"
            alt="avatar"
          >
        </Avatar>
      </div>
    </div>
  </div>
</template>

<script setup>
import arrowDown from '@/assets/icons/chevron-down.svg';
import arrowUp from '@/assets/icons/chevron-up.svg';
import Avatar, {
  AvatarCorner,
  AvatarSize,
  AvatarTransparency,
  AvatarVariant,
} from '@/components/Avatar.vue';
import UserButton, {
  ButtonSize,
  ButtonVariant,
} from '@/components/Basic/Button.vue';
import Chip, {
  ChipSize,
  ChipVariant,
} from '@/components/Chip.vue';
import MoneyStat, {
  MoneyStatSize,
  MoneyStatVariant,
} from '@/components/MoneyStat.vue';
import TotalStat, {
  TotalStatSize,
  TotalStatVariant,
} from '@/components/TotalStat.vue';

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
  .totalStat + .totalStat,
  .chip + .chip,
  .avatar + .avatar {
    margin-left: 20px;
  }

  .moneyStat + .moneyStat {
    margin-left: 10px;
  }
</style>
