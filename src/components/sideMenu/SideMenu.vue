<template>
  <aside class="side-menu">
    <div class="account">
      <DefaultAvatar :name="user.name" class="avatar"/>
      <span>
        Welcome, back!
        <br>
        {{ user.name }}
      </span>
    </div>
  </aside>
</template>

<script setup lang="ts">
import useAccountStore from "@/stores/account";
import type {IUser} from "@/stores/account";
import DefaultAvatar from "@/components/shared/DefaultAvatar.vue";
import {computed} from "vue";
import type {ComputedRef} from "vue";

const account = useAccountStore();
const user: ComputedRef<IUser> = computed(() => account.user);
</script>

<style scoped lang="scss">
.side-menu {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 300px;
  height: 100vh;
  background-color: #F6F6F6;

  padding: 10px 15px;
}

.account {
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  background-color: #F6F6F6;

  img {
    width: 50px;
    height: 50px;
  }

  span {
    padding-top: 2px;
    height: 50px;
    margin-left: 10px;
    line-height: 24px;

  }
}

.avatar {
  width: 50px;
  height: 50px;
}
</style>
