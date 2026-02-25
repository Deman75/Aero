<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const tocVisible = ref(true);

const toggleToc = () => {
  tocVisible.value = !tocVisible.value;
};

const openRoute = (path) => {
  router.push(path);
};
</script>

<template>
  <div class="page-root">
    <div class="ambient">
      <div class="blob blob-a"></div>
      <div class="blob blob-b"></div>
      <div class="grid"></div>
    </div>

    <header class="top">
      <div class="brand">
        <span class="brand-mark">Aero</span>
        <span class="brand-name">Справка по аэродинамике БПЛА</span>
      </div>
      <button class="ghost" type="button" @click="toggleToc">
        {{ tocVisible ? "Свернуть оглавление" : "Показать оглавление" }}
      </button>
    </header>

    <main class="layout">
      <section class="intro">
        <p class="eyebrow">Интерактивная база знаний</p>
        <h1>Интерактивная справка по аэродинамике беспилотных самолетов</h1>
        <p class="lead">
          Программа идет от базовых принципов к инженерным оценкам и дальше к расчету аппарата
          под конкретное техническое задание.
        </p>
        <div class="actions">
          <RouterLink class="primary" to="/start">Начать обучение</RouterLink>
          <button class="secondary" type="button">Открыть терминологию</button>
        </div>
        <div class="meta">
          <div>
            <div class="meta-label">Уровни</div>
            <div class="meta-value">Первый полет · Осознанная компоновка · Проектирование под ТЗ</div>
          </div>
          <div>
            <div class="meta-label">Формат</div>
            <div class="meta-value">Интерактивная справка</div>
          </div>
          <div>
            <div class="meta-label">Статус</div>
            <div class="meta-value">Содержание в разработке</div>
          </div>
        </div>
      </section>

      <section v-if="tocVisible" class="toc" id="toc">
        <div class="toc-header">
          <h2>Оглавление</h2>
          <span class="pill">3 уровня</span>
        </div>
        <div class="toc-grid">
          <article
            class="toc-card"
            role="link"
            tabindex="0"
            aria-label="Открыть уровень Первый полет"
            @click="openRoute('/start')"
            @keydown.enter.prevent="openRoute('/start')"
            @keydown.space.prevent="openRoute('/start')"
          >
            <header>
              <h3>Первый полет</h3>
              <p>
                Самый базовый уровень: что нужно, чтобы беспилотный самолет вообще смог взлететь
                и устойчиво лететь, без сложных расчетов.
              </p>
            </header>
            <RouterLink class="link" to="/start" @click.stop>Открыть уровень</RouterLink>
          </article>

          <article
            class="toc-card"
            role="link"
            tabindex="0"
            aria-label="Открыть уровень Осознанная компоновка"
            @click="openRoute('/level-2')"
            @keydown.enter.prevent="openRoute('/level-2')"
            @keydown.space.prevent="openRoute('/level-2')"
          >
            <header>
              <h3>Осознанная компоновка</h3>
              <p>
                Первые инженерные оценки: взлетный вес, площадь крыла, нагрузка на крыло и
                примерный выбор требуемой винтомоторной группы.
              </p>
            </header>
            <RouterLink class="link" to="/level-2" @click.stop>Открыть уровень</RouterLink>
          </article>

          <article
            class="toc-card"
            role="link"
            tabindex="0"
            aria-label="Открыть уровень Проектирование под ТЗ"
            @click="openRoute('/level-3')"
            @keydown.enter.prevent="openRoute('/level-3')"
            @keydown.space.prevent="openRoute('/level-3')"
          >
            <header>
              <h3>Проектирование под ТЗ</h3>
              <p>
                Продвинутый уровень: расчет самолета не «на глаз», а под конкретные требования
                по скорости, дальности, времени полета и полезной нагрузке.
              </p>
            </header>
            <RouterLink class="link" to="/level-3" @click.stop>Открыть уровень</RouterLink>
          </article>
        </div>

        <div class="toc-notes">
          <h4>Черновые заметки</h4>
          <ul class="notes">
            <li>Каждый уровень будет раскрыт на отдельной странице.</li>
            <li>Планируются интерактивные схемы и калькуляторы.</li>
            <li>Будет режим "практика" с задачами.</li>
          </ul>
        </div>
      </section>
    </main>

    <footer class="footer">
      <span>Справка по аэродинамике БПЛА · 2026</span>
      <span>Контент в разработке</span>
    </footer>
  </div>
</template>
