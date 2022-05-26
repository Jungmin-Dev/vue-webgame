<template>
  <div>
      <div>{{result}}</div>
    <form v-on:submit="onSubmitForm">
      <input maxlength="4" type="text" v-model="value" refs="answer" />
      <button type="submit">입력!</button>
    </form>
    <div>시도: {{ tries.length }}</div>
    <ul>
      <li v-for="t in tries">
        <div>{{ t.try }}</div>
        <div>{{ t.result }}</div>
      </li>
    </ul>
  </div>
</template>

<script>

const getNumbers = () => {
  const candidates = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const array = [];
  for (let i = 0; i < 4; i++) {
    const chosen = candidates.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
    array.push(chosen);
  }
  console.log(array.join(''));
  return array;
};

export default {
  data() {
    return {
      answer: getNumbers(),
      tries: [],
      value: '',
      result: '',
    };
  },
  methods: {
    onSubmitForm(e) {
      e.preventDefault();
      // 정답 맞췄으면
      if (this.value === this.answer.join('')) {
        this.tries.push({
          try: this.value,
          result: '홈런',
        });
        alert('홈런. 게임을 다시 시작합니다.');
        this.tries = [];
        this.result = '홈런'
      } else {
          if(this.tries.length >=9) { // 10번째 시도
          this.result = `10번 넘게 틀려서 실패! 답은 ${this.answer.join(',')}였습니다.`
          alert('게임을 다시 시작합니다.');
          this.value=''
          this.answer = getNumbers();
          this.tries = [];
          this.$refs.answer.focus();
              }
        let strike = 0;
        let ball = 0;
        const answerArray = this.value.split('').map((v) => parseInt(v));
        for (let i = 0; i < 4; i++) {
          if (answerArray[i] === this.answer[i]) {
            strike++;
          } else if (this.answer.includes(answerArray[i])) {
            ball++;
          }
        }

        this.tries.push({
          try: this.value,
          result: `${strike} 스트라이크 ${ball} 볼 입니다.`,
        });
      }
      this.value = '';
      this.$refs.answer.focus();
    },
  },
};


</script>
<style></style>
