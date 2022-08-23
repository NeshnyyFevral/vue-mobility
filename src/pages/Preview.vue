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
            <ArrowUp :class="$style.iconMoney" />
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
            <ArrowDown :class="$style.iconMoney" />
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
        Checkbox toggle
      </h3>
      <div :class="$style.example">
        <Checkbox
          :label="'checkbox 1'"
          :class="$style.checkbox"
          :value="checkboxFirstValue"
          :variant="ChecboxVariant.PRIMARY"
          @changeValue="checkboxFirstValue = !checkboxFirstValue"
        >
          {{ computedCheckboxFirstValue }}
        </Checkbox>
        <Checkbox
          :label="'checkbox 2'"
          :class="$style.checkbox"
          :value="checkboxSecondValue"
          :variant="ChecboxVariant.PRIMARY"
          @changeValue="checkboxSecondValue = !checkboxSecondValue"
        >
          {{ computedCheckboxSecondValue }}
        </Checkbox>
      </div>
    </div>
    <div :class="$style.item">
      <h3 :class="$style.exampleTitle">
        Checkbox colors
      </h3>
      <div :class="$style.example">
        <Checkbox
          v-for="variant in Object.values(ChecboxVariant)"
          :key="variant"
          :label="`${variant.toString()}Checkbox`"
          :class="$style.checkbox"
          :value="mapCheckboxColor[variant]"
          :variant="variant"
          @changeValue="mapCheckboxColor[variant] = !mapCheckboxColor[variant]"
        >
          {{ variant }}
        </Checkbox>
      </div>
    </div>
    <div :class="$style.item">
      <h3 :class="$style.exampleTitle">
        Checkbox disabled
      </h3>
      <div :class="$style.example">
        <Checkbox
          :label="'onDisabledCheckbox'"
          :class="$style.checkbox"
          :value="true"
          :variant="ChecboxVariant.PRIMARY"
          disabled
        >
          on disabled
        </Checkbox>
        <Checkbox
          :label="'offDisabledCheckbox'"
          :class="$style.checkbox"
          :value="false"
          :variant="ChecboxVariant.PRIMARY"
          disabled
        >
          off disabled
        </Checkbox>
      </div>
    </div>
    <div :class="$style.item">
      <h3 :class="$style.exampleTitle">
        Checkbox another value
      </h3>
      <div :class="$style.example">
        <Checkbox
          :label="'anotherValueFirst'"
          :class="$style.checkbox"
          :value="checkboxAnotherFirstValue"
          :variant="ChecboxVariant.PRIMARY"
          @changeValue="checkboxAnotherFirstValue = !checkboxAnotherFirstValue"
        >
          {{ anotherValueFirst }}
        </Checkbox>
        <Checkbox
          :label="'anotherValueSecond'"
          :class="$style.checkbox"
          :value="checkboxAnotherSecondValue"
          :variant="ChecboxVariant.SUCCESS"
          @changeValue="checkboxAnotherSecondValue = !checkboxAnotherSecondValue"
        >
          {{ anotherValueSecond }}
        </Checkbox>
      </div>
    </div>
    <div :class="$style.item">
      <h3 :class="$style.exampleTitle">
        Switch toggle
      </h3>
      <div :class="$style.example">
        <Checkbox
          :class="$style.checkbox"
          :label="'switch 1'"
          :value="switchFirstValue"
          :variant="ChecboxVariant.PRIMARY"
          toggle
          @changeValue="switchFirstValue = !switchFirstValue"
        >
          {{ computedSwitchFirstValue }}
        </Checkbox>
        <Checkbox
          :class="$style.checkbox"
          :label="'switch 2'"
          :value="switchSecondValue"
          :variant="ChecboxVariant.PRIMARY"
          toggle
          @changeValue="switchSecondValue = !switchSecondValue"
        >
          {{ computedSwitchSecondValue }}
        </Checkbox>
      </div>
    </div>
    <div :class="$style.item">
      <h3 :class="$style.exampleTitle">
        Switch colors
      </h3>
      <div :class="$style.example">
        <Checkbox
          v-for="variant in Object.values(ChecboxVariant)"
          :key="variant"
          :class="$style.checkbox"
          :label="`${variant.toString()}Switch`"
          :value="mapSwitchColor[variant]"
          :variant="variant"
          toggle
          @changeValue="mapSwitchColor[variant] = !mapSwitchColor[variant]"
        >
          {{ variant }}
        </Checkbox>
      </div>
    </div>
    <div :class="$style.item">
      <h3 :class="$style.exampleTitle">
        Switch disabled
      </h3>
      <div :class="$style.example">
        <Checkbox
          :class="$style.checkbox"
          :label="'switch 3'"
          :value="false"
          :variant="ChecboxVariant.PRIMARY"
          toggle
          disabled
        >
          off disabled
        </Checkbox>
        <Checkbox
          :class="$style.checkbox"
          :label="'switch 4'"
          :value="true"
          :variant="ChecboxVariant.PRIMARY"
          toggle
          disabled
        >
          on disabled
        </Checkbox>
      </div>
    </div>
    <div :class="$style.item">
      <h3 :class="$style.exampleTitle">
        Switch slot + userValue
      </h3>
      <div :class="$style.example">
        <Checkbox
          :class="$style.checkbox"
          :label="'switch 5'"
          :value="switchMergeValue"
          :variant="ChecboxVariant.PRIMARY"
          toggle
          @changeValue="switchMergeValue = !switchMergeValue"
        >
          switch: {{ computedSwitchMergeValue }}
        </Checkbox>
      </div>
    </div>
    <div :class="$style.item">
      <h3 :class="$style.exampleTitle">
        Radio direction
      </h3>
      <div :class="$style.example">
        <RadioGroup>
          <Radio
            :class="$style.radio"
            :variant="RadioVariant.PRIMARY"
            :value="'radio1'"
            :label="'radio1'"
            :name="'RadioGroup1'"
            checked
          />
          <Radio
            :class="$style.radio"
            :variant="RadioVariant.PRIMARY"
            :value="'radio2'"
            :label="'radio2'"
            :name="'RadioGroup1'"
          />
        </RadioGroup>
        <RadioGroup
          :class="$style.radioGroupColumn"
          column
        >
          <Radio
            :class="$style.radioColumn"
            :variant="RadioVariant.PRIMARY"
            :value="'radio1'"
            :label="'radio3'"
            :name="'RadioGroup2'"
          />
          <Radio
            :class="$style.radioColumn"
            :variant="RadioVariant.PRIMARY"
            :value="'radio2'"
            :label="'radio4'"
            checked
            :name="'RadioGroup2'"
          />
        </RadioGroup>
      </div>
    </div>
    <div :class="$style.item">
      <h3 :class="$style.exampleTitle">
        Radio colors
      </h3>
      <div :class="$style.example">
        <RadioGroup>
          <Radio
            v-for="variant in Object.values(RadioVariant)"
            :key="variant"
            :class="$style.radio"
            :variant="variant"
            :value="`${variant.toString()}`"
            :label="`${variant.toString()}`"
            :name="'RadioGroup3'"
            checked
          />
        </RadioGroup>
      </div>
    </div>
    <div :class="$style.item">
      <h3 :class="$style.exampleTitle">
        Radio slot
      </h3>
      <div :class="$style.example">
        <RadioGroup>
          <Radio
            :class="$style.radio"
            :variant="RadioVariant.PRIMARY"
            :label="'radio5'"
            :name="'RadioGroup4'"
            checked
            user-slot
          >
            <p>
              radio
              <strong style="color: blueviolet;"> slot 1</strong>
            </p>
          </Radio>
          <Radio
            :class="$style.radio"
            :variant="RadioVariant.PRIMARY"
            :label="'radio6'"
            :name="'RadioGroup4'"
            user-slot
          >
            <p>
              radio
              <strong style="color: red;"> slot 2</strong>
            </p>
          </Radio>
        </RadioGroup>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue';

import ArrowDown from '@/assets/icons/chevron-down.svg';
import ArrowUp from '@/assets/icons/chevron-up.svg';
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
import Checkbox, { ChecboxVariant } from '@/components/Basic/Checkbox.vue';
import Radio, { RadioVariant } from '@/components/Basic/Radio.vue';
import RadioGroup from '@/components/Basic/RadioGroup.vue';
import Chip, { ChipSize, ChipVariant } from '@/components/Chip.vue';
import MoneyStat, {
  MoneyStatSize,
  MoneyStatVariant,
} from '@/components/MoneyStat.vue';
import TotalStat, {
  TotalStatSize,
  TotalStatVariant,
} from '@/components/TotalStat.vue';

const checkboxFirstValue = ref(true);
const checkboxSecondValue = ref(false);

const computedCheckboxFirstValue = computed(() => (checkboxFirstValue.value === true ? 'false' : 'true'));
const computedCheckboxSecondValue = computed(() => (checkboxSecondValue.value === true ? 'false' : 'true'));

const mapCheckboxColor = ref({
  primary: true,
  warning: true,
  error: true,
  success: true,
  default: true,
  info: true,
});

const checkboxAnotherFirstValue = ref(true);
const checkboxAnotherSecondValue = ref(false);

const anotherValueFirst = computed(() => (checkboxAnotherFirstValue.value === true ? 'неверно' : 'верно'));
const anotherValueSecond = computed(() => (checkboxAnotherSecondValue.value === true ? '0' : '1'));

const switchFirstValue = ref(true);
const switchSecondValue = ref(false);

const computedSwitchFirstValue = computed(() => (switchFirstValue.value === true ? 'false' : 'true'));
const computedSwitchSecondValue = computed(() => (switchSecondValue.value === true ? 'false' : 'true'));

const mapSwitchColor = ref({
  primary: true,
  warning: true,
  error: true,
  success: true,
  default: true,
  info: true,
});

const switchMergeValue = ref(false);

const computedSwitchMergeValue = computed(() => (switchMergeValue.value === true ? 'hide' : 'show'));
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
  .avatar + .avatar,
  .checkbox + .checkbox {
    margin-left: 20px;
  }

  .moneyStat + .moneyStat,
  .radio + .radio {
    margin-left: 7px;
  }

  .radioGroupColumn {
    position: relative;
    margin-left: 30px;

    &::before {
      position: absolute;
      top: 0;
      left: -15px;
      display: inline-block;
      width: 1.5px;
      height: 100%;
      content: '';
      background-color: #616161;
    }
  }

</style>
