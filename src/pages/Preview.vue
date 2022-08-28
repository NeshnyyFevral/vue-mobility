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
        <RadioGroup :class="$style.radioGroupRow">
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
      <RadioGroup :class="$style.example">
        <Radio
          v-for="variant in Object.values(RadioVariant)"
          :key="variant"
          :class="$style.radio"
          :variant="variant"
          :value="variant"
          :label="`${variant.toString()}`"
          :name="'RadioGroup3'"
          checked
        />
      </RadioGroup>
    </div>
    <div :class="$style.item">
      <h3 :class="$style.exampleTitle">
        Radio slot
      </h3>
      <div :class="$style.example">
        <RadioGroup :class="$style.example">
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
          :tag="'input'"
          :label="`${size.toString()}Size`"
          outlined
        />
      </div>
    </div>
    <div :class="$style.item">
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
          :tag="'input'"
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
            <Cross :class="$style.icon" />
            <span>cross</span>
            <Cross :class="$style.icon" />
          </div>
        </UserInput>
      </div>
    </div>
    <div :class="$style.item">
      <h3 :class="$style.exampleTitle">
        Input progress
      </h3>
      <div :class="$style.example">
        <UserInput
          :size="InputSize.SMALL"
          :class="$style.input"
          :label="'input 16'"
          :placeholder="'Progress'"
          :value="''"
          progress
          :counter="30"
        />
      </div>
    </div>
    <div :class="$style.item">
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
        >
          <template #prepend>
            <EyeOff :class="$style.prependInputIcon" />
          </template>
        </UserInput>
        <UserInput
          :size="InputSize.SMALL"
          :class="$style.input"
          :label="'input 18'"
          :value="''"
          :placeholder="'Prepend inner'"
          move-desc
        >
          <template #prependInner>
            <EyeOn :class="$style.prependInputIcon" />
          </template>
        </UserInput>
        <UserInput
          :size="InputSize.SMALL"
          :class="$style.input"
          :label="'input 19'"
          :value="''"
          :placeholder="'Append inner'"
        >
          <template #appendInner>
            <EyeOff :class="$style.appendInputIcon" />
          </template>
        </UserInput>
        <UserInput
          :size="InputSize.SMALL"
          :class="$style.input"
          :label="'input 20'"
          :value="''"
          :placeholder="'Append'"
        >
          <template #append>
            <EyeOn :class="$style.appendInputIcon" />
          </template>
        </UserInput>
      </div>
    </div>
    <div :class="$style.item">
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
          :type="show1 ? 'text' : 'password'"
        >
          <template #appendInner>
            <component
              :is="show1 ? EyeOff : EyeOn"
              :class="$style.appendInputIcon"
              @focus="show1 = !show1"
            />
          </template>
        </UserInput>
        <UserInput
          :size="InputSize.SMALL"
          :class="[$style.input, $style.password]"
          :label="'input 22'"
          :value="'123'"
          :rules="rulesPassword"
          :placeholder="'Your password'"
          :hint="'At least 8 characters'"
          :counter="8"
          :type="show2 ? 'text' : 'password'"
        >
          <template #appendInner>
            <component
              :is="show2 ? EyeOff : EyeOn"
              :class="$style.appendInputIcon"
              @focus="show2 = !show2"
            />
          </template>
        </UserInput>
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
  </div>
</template>

<script setup>
import { computed, ref } from 'vue';

import ArrowDown from '@/assets/icons/chevron-down.svg';
import ArrowUp from '@/assets/icons/chevron-up.svg';
import Cross from '@/assets/icons/cross.svg';
import EyeOff from '@/assets/icons/eye-off.svg';
import EyeOn from '@/assets/icons/eye-on.svg';
import Avatar, {
  AvatarCorner, AvatarSize, AvatarTransparency, AvatarVariant,
} from '@/components/Avatar.vue';
import UserButton, { ButtonSize, ButtonVariant } from '@/components/Basic/Button.vue';
import Checkbox, { ChecboxVariant } from '@/components/Basic/Checkbox.vue';
import UserInput, { InputRadius, InputSize, InputVariant } from '@/components/Basic/Input.vue';
import Radio, { RadioVariant } from '@/components/Basic/Radio.vue';
import RadioGroup from '@/components/Basic/RadioGroup.vue';
import Chip, { ChipSize, ChipVariant } from '@/components/Chip.vue';
import MoneyStat, { MoneyStatSize, MoneyStatVariant } from '@/components/MoneyStat.vue';
import TotalStat, { TotalStatSize, TotalStatVariant } from '@/components/TotalStat.vue';

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
    width: 100%;
    margin: 0 auto;
  }

  .example {
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-items: center;
    width: 100%;
  }

  .exampleTitle {
    margin-bottom: 10px;
    font-size: 30px;
    color: #616161;
  }

  .item {
    padding: 20px;
    padding-bottom: 25px;
    background-color: #fff;
    border-radius: 12px;
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

  .radioGroupColumn,
  .radioGroupRow {
    position: relative;
    margin-right: 30px;
  }

  .radioGroupColumn {
    &::before {
      position: absolute;
      top: 7px;
      left: -15px;
      display: inline-block;
      width: 1.5px;
      height: 100%;
      content: '';
      background-color: #616161;
    }
  }

  .userButton,
  .totalStat,
  .moneyStat,
  .chip,
  .avatar,
  .checkbox,
  .radio,
  .radioColumn {
    margin-top: 16px;
    margin-right: 16px;
  }

  .input + .input {
    margin-top: 10px;
  }

  .prependInputIcon,
  .appendInputIcon {
    width: 30px;
    height: 30px;
    margin-top: 5px;
  }

  .prependInputIcon {
    margin-right: 5px;
  }

  .appendInputIcon {
    margin-left: 5px;
  }

  .password + .password {
    margin-top: 60px;
  }

  @media screen and (max-width: 996px) {
    .container {
      grid-template-columns: repeat(1, 1fr);
    }
  }

  @media screen and (max-width: 477px) {
    .radioGroupRow {
      margin-bottom: 20px;
    }

    .radioGroupColumn {
      &::before {
        top: -10px;
        left: 0;
        width: 200%;
        height: 1.5px;
      }
    }
  }
</style>
