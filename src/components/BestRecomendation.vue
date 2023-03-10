<template>
  <div class="recomendation">
    <div class="text">
      <div class="frame">DISCOVER</div>
      <h1 class="h1">Best recommendation</h1>
      <div class="paragaph">
        <p class="p">Discover our exclusive selection of the finest one-of-a-kind <br>luxury properties architectural masterpieces.</p>
        <p class="learn">Learn More</p>
      </div>
    </div>
      <div class="hotels">
        <div class="hotel">
          <div class="img">
            <img src="" alt="hotel" srcset="">
          </div>
          <div class="cta">
            <h2 class="h2">Perum griya asri</h2>
            <p class="p">Bogor, Jawa Barat</p>
            <div class="values">
              <div class="value">$25,000</div>
              <div class="frame">360m2 Living Area</div>
            </div>
            <button class="btn -inverso">Send Inquiry</button>
          </div>
        </div>  
        <div class="hotel">
          <div class="img">
            <img src="" alt="hotel" srcset="">
          </div>
          <div class="cta">
            <h2 class="h2">Perum griya asri</h2>
            <p class="p">Bogor, Jawa Barat</p>
            <div class="values">
              <div class="value">$25,000</div>
              <div class="frame">360m2 Living Area</div>
            </div>
            <button class="btn -inverso">Send Inquiry</button>
          </div>
        </div>
        <div class="hotel">
          <div class="img">
            <img src="#" alt="hotel" srcset="">
          </div>
          <div class="cta">
            <h2 class="h2">Perum griya asri</h2>
            <p class="p">Bogor, Jawa Barat</p>
            <div class="values">
              <div class="value">$25,000</div>
              <div class="frame">360m2 Living Area</div>
            </div>
            <button class="btn -inverso">Send Inquiry</button>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BestRecomendation',
}
</script>

<style lang="scss" scoped>
  .recomendation {
    width: 100%;
    gap: 3.125rem;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;
    padding: 1em;
    .h1{
      font-family: 'Rubik';
      font-style: normal;
      font-weight: 600;
      font-size: 48px;
      line-height: 56px;
      letter-spacing: 0.5px;
      color: #054457;
    }
    .paragaph{
      background-color: wheat;
      display: flex;
      flex-flow: row nowrap;
      align-items: top;
      justify-content: space-between;
    }
    .text{
      width: 90%;
      max-width: 120rem;
      background-color:rgb(0, 255, 55);
      display: flex;
      flex-flow: column nowrap;
      gap: 1.125rem;
    }
    .hotels{
      width: 90%;
      max-width: 120rem;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-template-rows: 1fr;
      gap: 0px 0%;
      grid-auto-flow: row;
      grid-template-areas:
        ". . .";
      gap: 2rem;
      
      .hotel{
        display: flex;
        flex-flow: column nowrap;
        align-items: center;
        justify-content: center;
        border: 1px solid #DEDCDA;
        padding: 1em;
        .cta{
          background-color:rosybrown;
          width: 100%;
          .values{
            display: flex;
            flex-flow: row nowrap;
            align-items: center;
            justify-content: flex-start;
            gap: 4.125rem;
          }
        }
      }
    }
  }
</style>