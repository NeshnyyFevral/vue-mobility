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
    <div :class="$style.item">
      <h3 :class="$style.exampleTitle">
        Input Basic
      </h3>
      <div :class="$style.example">
        <UserInput
          :placeholder="'Basic input'"
          :size="InputSize.SMALL"
          :class="$style.input"
          :radius="InputRadius.RECTANGLE"
          :label="'input 1'"
        />
      </div>
    </div>
    <div :class="$style.item">
      <h3 :class="$style.exampleTitle">
        Input outlined
      </h3>
      <div :class="$style.example">
        <UserInput
          :placeholder="'Outlined input'"
          :size="InputSize.SMALL"
          :class="$style.input"
          :label="'input 2'"
          outlined
        />
      </div>
    </div>
    <div :class="$style.item">
      <h3 :class="$style.exampleTitle">
        Input shaped
      </h3>
      <div :class="$style.example">
        <UserInput
          :placeholder="'Shaped'"
          :size="InputSize.SMALL"
          :class="$style.input"
          :label="'input 3'"
          outlined
          shaped
        />
      </div>
    </div>
    <div :class="$style.item">
      <h3 :class="$style.exampleTitle">
        Input solo
      </h3>
      <div :class="$style.example">
        <UserInput
          :placeholder="'Solo'"
          :size="InputSize.SMALL"
          :class="$style.input"
          :label="'input 4'"
          outlined
          solo
        />
      </div>
    </div>
    <div :class="[$style.item, $style.itemInput]">
      <h3 :class="$style.exampleTitle">
        Input size
      </h3>
      <div :class="$style.example">
        <UserInput
          v-for="size in Object.values(InputSize)"
          :key="size"
          :placeholder="size"
          :size="size"
          :radius="InputRadius.DEFAULT"
          :class="$style.input"
          :multiline="'input'"
          :label="`${size.toString()}Size`"
          outlined
        />
      </div>
    </div>
    <div :class="[$style.item, $style.itemInput]">
      <h3 :class="$style.exampleTitle">
        Input radius
      </h3>
      <div :class="$style.example">
        <UserInput
          v-for="radius in Object.values(InputRadius)"
          :key="radius"
          :placeholder="radius"
          :size="InputSize.SMALL"
          :radius="radius"
          :class="$style.input"
          :multiline="'input'"
          :label="`${radius.toString()}Radius`"
          outlined
        />
      </div>
    </div>
    <div :class="$style.item">
      <h3 :class="$style.exampleTitle">
        Input solo
      </h3>
      <div :class="$style.example">
        <UserInput
          :placeholder="'Disabled'"
          :size="InputSize.SMALL"
          :class="$style.input"
          :label="'input 5'"
          :value="'Jhon Doe'"
          disabled
        />
        <UserInput
          :placeholder="'Readonly'"
          :size="InputSize.SMALL"
          :class="$style.input"
          :label="'input 6'"
          :value="'Moe Gilsberg'"
          readonly
        />
      </div>
    </div>
    <div :class="$style.item">
      <h3 :class="$style.exampleTitle">
        Input counter
      </h3>
      <div :class="$style.example">
        <UserInput
          :placeholder="'Regular'"
          :size="InputSize.SMALL"
          :class="$style.input"
          :label="'input 7'"
          :value="'Lorem ipsum dolor sit amet'"
          :counter="count"
          :rules="rules"
          :hint="'This field uses counter prop'"
        />
      </div>
    </div>
    <div :class="$style.item">
      <h3 :class="$style.exampleTitle">
        Input maxlength
      </h3>
      <div :class="$style.example">
        <UserInput
          :placeholder="'Regular'"
          :size="InputSize.SMALL"
          :class="$style.input"
          :label="'input 8'"
          :value="'Lorem ipsum dolor sit amet'"
          :maxlength="count"
          :rules="rules"
          :hint="'This field uses maxlength prop'"
        />
      </div>
    </div>
    <div :class="$style.item">
      <h3 :class="$style.exampleTitle">
        Custom colors
      </h3>
      <div :class="$style.example">
        <UserInput
          :placeholder="'First name'"
          :size="InputSize.SMALL"
          :class="$style.input"
          :label="'input 9'"
          :value="'Lorem ipsum dolor sit amet'"
          :variant="InputVariant.SUCCESS"
        />
      </div>
    </div>
    <div :class="$style.item">
      <h3 :class="$style.exampleTitle">
        Input clearable
      </h3>
      <div :class="$style.example">
        <UserInput
          :placeholder="'First name'"
          :size="InputSize.SMALL"
          :class="$style.input"
          :label="'input 10'"
          clearable
          :value="'Lorem ipsum dolor sit amet'"
        />
      </div>
    </div>
    <div :class="$style.item">
      <h3 :class="$style.exampleTitle">
        Input prefixes and suffixes
      </h3>
      <div :class="$style.example">
        <UserInput
          :placeholder="'Email address'"
          :size="InputSize.SMALL"
          :class="$style.input"
          :label="'input 11'"
          :value="'ivan.turovskiy'"
          :suffix="'@gmail.com'"
        />
        <UserInput
          :placeholder="'Amount'"
          :size="InputSize.SMALL"
          :class="$style.input"
          :label="'input 12'"
          :value="'ivan.turovskiy'"
          :prefix="'$$'"
        />
      </div>
    </div>
    <div :class="$style.item">
      <h3 :class="$style.exampleTitle">
        Validation
      </h3>
      <div :class="$style.example">
        <UserInput
          :placeholder="'Email address'"
          :size="InputSize.SMALL"
          :class="$style.input"
          :label="'input 13'"
          :value="''"
          :rules="[rulesEmail.required, rulesEmail.email]"
        />
      </div>
    </div>
    <div :class="$style.item">
      <h3 :class="$style.exampleTitle">
        Validate on blur
      </h3>
      <div :class="$style.example">
        <UserInput
          :placeholder="'Email address'"
          :size="InputSize.SMALL"
          :class="$style.input"
          :label="'input 14'"
          :value="''"
          validate-on-blur
          :rules="[rulesEmail.required, rulesEmail.email]"
        />
      </div>
    </div>
    <div :class="$style.item">
      <h3 :class="$style.exampleTitle">
        Input uses slot
      </h3>
      <div :class="$style.example">
        <UserInput
          :size="InputSize.SMALL"
          :class="$style.input"
          :label="'input 15'"
          :value="''"
        >
          <div :class="$style.slot">
            <cross :class="$style.icon" />
            <span>cross</span>
            <cross :class="$style.icon" />
          </div>
        </UserInput>
      </div>
    </div>
    <div :class="$style.item">
      <h3 :class="$style.exampleTitle">
        Input progress (in developing...)
      </h3>
      <div :class="$style.example">
        <UserInput
          :size="InputSize.SMALL"
          :class="$style.input"
          :label="'input 16'"
          :value="''"
        />
      </div>
    </div>
    <div :class="[$style.item, $style.itemInput]">
      <h3 :class="$style.exampleTitle">
        Input icons
      </h3>
      <div :class="$style.example">
        <UserInput
          :size="InputSize.SMALL"
          :class="$style.input"
          :label="'input 17'"
          :value="''"
          :placeholder="'Prepend'"
          :prepend="{icon: eyeOn}"
        />
        <UserInput
          :size="InputSize.SMALL"
          :class="$style.input"
          :label="'input 18'"
          :value="''"
          :placeholder="'Prepend inner'"
          :prepend-inner="{icon: eyeOn}"
        />
        <UserInput
          :size="InputSize.SMALL"
          :class="$style.input"
          :label="'input 19'"
          :value="''"
          :placeholder="'Append inner'"
          :append-inner="{icon: eyeOn}"
        />
        <UserInput
          :size="InputSize.SMALL"
          :class="$style.input"
          :label="'input 20'"
          :value="''"
          :placeholder="'Append'"
          :append="{icon: eyeOn}"
        />
      </div>
    </div>
    <div :class="[$style.item, $style.itemInput]">
      <h3 :class="$style.exampleTitle">
        Input password
      </h3>
      <div :class="$style.example">
        <UserInput
          :size="InputSize.SMALL"
          :class="[$style.input, $style.password]"
          :label="'input 21'"
          :value="'123'"
          :rules="rulesPassword"
          :placeholder="'Your password'"
          :hint="'At least 8 characters'"
          :counter="8"
          :visiable="show1 ? 'text' : 'password'"
          :append-inner="{icon: show1 ? eyeOff : eyeOn, click() {show1 = !show1}}"
        />
        <UserInput
          :size="InputSize.SMALL"
          :class="[$style.input, $style.password]"
          :label="'input 22'"
          :value="'123'"
          :rules="rulesPassword"
          :placeholder="'Your password'"
          :hint="'At least 8 characters'"
          :counter="8"
          :visiable="show2 ? 'text' : 'password'"
          :append-inner="{icon: show2 ? eyeOff : eyeOn, click() {show2 = !show2}}"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

import arrowDown from '@/assets/icons/chevron-down.svg';
import arrowUp from '@/assets/icons/chevron-up.svg';
import cross from '@/assets/icons/cross.svg';
import eyeOff from '@/assets/icons/eye-off.svg';
import eyeOn from '@/assets/icons/eye-on.svg';
import Avatar, {
  AvatarCorner, AvatarSize, AvatarTransparency, AvatarVariant,
} from '@/components/Avatar.vue';
import UserButton, { ButtonSize, ButtonVariant } from '@/components/Basic/Button.vue';
import UserInput, { InputRadius, InputSize, InputVariant } from '@/components/Basic/Input.vue';
import Chip, { ChipSize, ChipVariant } from '@/components/Chip.vue';
import MoneyStat, { MoneyStatSize, MoneyStatVariant } from '@/components/MoneyStat.vue';
import TotalStat, { TotalStatSize, TotalStatVariant } from '@/components/TotalStat.vue';

const count = 25;
const rules = [(value) => value.length <= count || `max ${count} characters`];
const rulesEmail = {
  required: (value) => !!value || 'Required.',
  email: (value) => {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(value) || 'Invalid e-mail.';
  },
};

const rulesPassword = [(value) => value.length >= 8 || 'min 8 characters'];
const show1 = ref(true);
const show2 = ref(false);
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
    flex-flow: wrap row;
    align-items: center;
    justify-items: center;
  }

  .exampleTitle {
    margin-bottom: 15px;
    font-size: 30px;
    color: #616161;
  }

  .item {
    justify-content: center;
    height: 168px;
    padding: 15px;
    background-color: #fff;
    border-radius: 12px;
  }

  .itemInput {
    height: 280px;
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

  .input + .input {
    margin-top: 10px;
  }

  .slot {
    display: flex;
    align-items: center;
  }

  .icon {
    width: 16px;
    height: 16px;
    fill: #000;
  }

  .password + .password {
    margin-top: 60px;
  }
</style>
