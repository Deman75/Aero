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
        <span class="brand-name">Уровень 2 · Осознанная компоновка</span>
      </div>
      <RouterLink class="ghost back-link" to="/">К оглавлению</RouterLink>
    </header>

    <main class="level-layout">
      <section class="intro level-hero">
        <p class="eyebrow">Уровень 2</p>
        <h1>Осознанная компоновка</h1>
        <p class="lead">
          На этом уровне появляются первые инженерные оценки: взлетный вес, площадь крыла,
          нагрузка на крыло и предварительный выбор винтомоторной группы.
        </p>
        <div class="summary-grid">
          <article class="summary-card">
            <h3>Цель</h3>
            <p>Перейти от интуитивных решений к расчетным оценкам</p>
          </article>
          <article class="summary-card">
            <h3>Фокус</h3>
            <p>Вес, геометрия, нагрузка и требуемая тяга</p>
          </article>
          <article class="summary-card">
            <h3>Результат</h3>
            <p>Рабочая черновая конфигурация аппарата</p>
          </article>
        </div>
      </section>

      <section class="panel">
        <div class="panel-head">
          <h2>Что оцениваем на уровне 2</h2>
          <p class="kicker">Базовый инженерный минимум</p>
        </div>
        <ul class="feature-list">
          <li>взлетный вес аппарата с учетом полезной нагрузки;</li>
          <li>площадь крыла и планформу;</li>
          <li>нагрузку на крыло для выбранного режима полета;</li>
          <li>диапазон скоростей и запас тяги;</li>
          <li>предварительную конфигурацию ВМГ.</li>
        </ul>
      </section>

      <section class="panel">
        <div class="panel-head">
          <h2>Типовой порядок работы</h2>
          <p class="kicker">Черновой цикл компоновки</p>
        </div>
        <ol class="steps">
          <li>Задать целевую массу и разложить ее по подсистемам.</li>
          <li>Выбрать ориентировочную площадь крыла и удлинение.</li>
          <li>Проверить нагрузку на крыло и ожидаемую взлетную скорость.</li>
          <li>Подобрать ВМГ по требуемой тяге и энерговооруженности.</li>
          <li>Проверить центровку и доступный диапазон настройки ЦТ.</li>
        </ol>
      </section>

      <section class="panel">
        <div class="panel-head">
          <h2>Статус страницы</h2>
          <p class="kicker">Следующий шаг</p>
        </div>
        <p class="kicker">
          Здесь будет добавлен набор калькуляторов для оценки нагрузки на крыло, стартовой скорости
          и предварительного подбора винтомоторной группы.
        </p>
      </section>
    </main>

    <footer class="footer">
      <span>Уровень 2 · Осознанная компоновка</span>
      <span>Раздел в разработке</span>
    </footer>
  </div>
</template>
