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
        <span class="brand-name">Уровень 3 · Проектирование под ТЗ</span>
      </div>
      <RouterLink class="ghost back-link" to="/">К оглавлению</RouterLink>
    </header>

    <main class="level-layout">
      <section class="intro level-hero">
        <p class="eyebrow">Уровень 3</p>
        <h1>Проектирование под ТЗ</h1>
        <p class="lead">
          Продвинутый уровень: самолет проектируется не «на глаз», а под конкретное техническое
          задание с целевыми параметрами скорости, дальности, продолжительности полета и полезной нагрузки.
        </p>
        <div class="summary-grid">
          <article class="summary-card">
            <h3>Цель</h3>
            <p>Достичь параметров, заданных в ТЗ</p>
          </article>
          <article class="summary-card">
            <h3>Фокус</h3>
            <p>Связанные расчеты, ограничения и верификация</p>
          </article>
          <article class="summary-card">
            <h3>Результат</h3>
            <p>Обоснованный проект с подтвержденными характеристиками</p>
          </article>
        </div>
      </section>

      <section class="panel">
        <div class="panel-head">
          <h2>Типовые входные данные ТЗ</h2>
          <p class="kicker">От чего считаем проект</p>
        </div>
        <ul class="feature-list">
          <li>крейсерская и максимальная скорость;</li>
          <li>дальность и/или продолжительность полета;</li>
          <li>масса и тип полезной нагрузки;</li>
          <li>ограничения по взлетной массе и габаритам;</li>
          <li>условия эксплуатации и требования к надежности.</li>
        </ul>
      </section>

      <section class="panel">
        <div class="panel-head">
          <h2>Контур инженерного расчета</h2>
          <p class="kicker">Итерационный процесс</p>
        </div>
        <ol class="steps">
          <li>Построить баланс массы и энергии для миссии.</li>
          <li>Уточнить аэродинамическую компоновку и диапазон скоростей.</li>
          <li>Согласовать ВМГ и энергосистему под профиль полета.</li>
          <li>Проверить устойчивость, управляемость и эксплуатационные ограничения.</li>
          <li>Сверить результаты с ТЗ и зафиксировать запас по ключевым параметрам.</li>
        </ol>
      </section>

      <section class="panel">
        <div class="panel-head">
          <h2>Статус страницы</h2>
          <p class="kicker">Следующий шаг</p>
        </div>
        <p class="kicker">
          Здесь будут размещены мини-приложения для расчетов по миссии, энергетике, аэродинамике
          и проверке выполнения требований ТЗ.
        </p>
      </section>
    </main>

    <footer class="footer">
      <span>Уровень 3 · Проектирование под ТЗ</span>
      <span>Раздел в разработке</span>
    </footer>
  </div>
</template>
