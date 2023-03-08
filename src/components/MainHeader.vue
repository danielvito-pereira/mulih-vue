<template>
 <header class="header">
    <div class="navigation">
      <div class="wrapper">
        <h1 class="h1">
          <svg width="115" height="40" viewBox="0 0 115 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M67.368 11.32V28H64.632V16.576L59.544 28H57.648L52.536 16.576V28H49.8V11.32H52.752L58.608 24.4L64.44 11.32H67.368ZM83.4401 14.776V28H80.7041V26.44C80.2721 26.984 79.7041 27.416 79.0001 27.736C78.3121 28.04 77.5761 28.192 76.7921 28.192C75.7521 28.192 74.8161 27.976 73.9841 27.544C73.1681 27.112 72.5201 26.472 72.0401 25.624C71.5761 24.776 71.3441 23.752 71.3441 22.552V14.776H74.0561V22.144C74.0561 23.328 74.3521 24.24 74.9441 24.88C75.5361 25.504 76.3441 25.816 77.3681 25.816C78.3921 25.816 79.2001 25.504 79.7921 24.88C80.4001 24.24 80.7041 23.328 80.7041 22.144V14.776H83.4401ZM90.286 10.24V28H87.55V10.24H90.286ZM95.7701 13.024C95.2741 13.024 94.8581 12.856 94.5221 12.52C94.1861 12.184 94.0181 11.768 94.0181 11.272C94.0181 10.776 94.1861 10.36 94.5221 10.024C94.8581 9.688 95.2741 9.52 95.7701 9.52C96.2501 9.52 96.6581 9.688 96.9941 10.024C97.3301 10.36 97.4981 10.776 97.4981 11.272C97.4981 11.768 97.3301 12.184 96.9941 12.52C96.6581 12.856 96.2501 13.024 95.7701 13.024ZM97.1141 14.776V28H94.3781V14.776H97.1141ZM108.046 14.56C109.054 14.56 109.95 14.776 110.734 15.208C111.534 15.64 112.158 16.28 112.606 17.128C113.07 17.976 113.302 19 113.302 20.2V28H110.59V20.608C110.59 19.424 110.294 18.52 109.702 17.896C109.11 17.256 108.302 16.936 107.278 16.936C106.254 16.936 105.438 17.256 104.83 17.896C104.238 18.52 103.942 19.424 103.942 20.608V28H101.206V10.24H103.942V16.312C104.406 15.752 104.99 15.32 105.694 15.016C106.414 14.712 107.198 14.56 108.046 14.56Z" fill="#4BA586"/>
            <circle cx="20" cy="20" r="20" fill="#4BA586"/>
            <path d="M30.096 11.08V28H25.392V18.664L22.2 28H18.264L15.048 18.592V28H10.344V11.08H16.032L20.28 22.072L24.432 11.08H30.096Z" fill="#FEFEFF"/>
            </svg>
        </h1>
        <button class="button">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
          </svg>
        </button>
      </div>
      <nav class="nav">
        <ul class="ul">
          <li class="li"><a href="" class="a">Home</a></li>
          <li class="li"><a href="" class="a">Property</a></li>
          <li class="li"><a href="" class="a">About</a></li>
          <li class="li"><a href="" class="a">Service</a></li>
          <li class="li"><a href="" class="a">Contact</a></li>
        </ul>
        <div class="buttons">
          <button class="btn">Sign in</button>
          <button class="btn -verde">Login</button>
        </div>
      </nav>
    </div>
    <div class="text">
      <div class="tverde">
        <h2 class="h2">REAL ESTATE</h2>
      </div>
      <div class="title">
        <h1 class="h1">Let's hunt for your dream residence</h1>
        <p class="p">
          Explore our range of beautiful properties with the addition of separate accommodation suitable for you.
        </p>
      </div>
      <div class="epc">
        <div class="buttons">
          <button class="btn">Buy</button>
          <button class="btn">Rent</button>
        </div>
        <div class="search">
          <div class="options">
            <h2>Location</h2>

          </div>
          <div class="options">
            <h2>Type</h2>
          </div>
          <div class="options">
            <h2>Price Range</h2>

          </div>
          <button class="btn -verde">Search</button>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'MainHeader',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .header{
    width: 100%;
    height: 100vh;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: flex-start;
    background: #F5F5F5;
    background-image: url(../../public/img/img/bernard-hermant-KqOLr8OiQLU-unsplash\ 1.png);
    background-repeat: no-repeat;
    background-position: bottom right;
    background-size: contain;
    .navigation{
      width: 90%;
      padding: 1em;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .button{
        display: none;
        cursor: pointer;
      }
      .nav{/*quando o botão não estiver ativo */
        width: 100%;
        /* display: none;*/
        overflow: hidden;
        transition: all .5s ease-in-out;
        display:flex;
        flex-flow: row nowrap;
        align-items: center;
        justify-content: flex-end;
        gap: 15%;
        .activo{/*quando o botão estiver ativo */
          /*para suavizar o efeito apenas retirei a altura e depois adicionei com um transition */
          /*display: block;*/
          height: 50vh;
          pointer-events: auto;
        }
        .logo{
          display: flex;
        }
        .ul{
          display: flex;
          flex-flow: row nowrap;
          align-items: center;
          justify-content: center;
          gap: 20px;
          transition: all .5s ease;
          .a{
            display: flex;
            flex-flow: column-reverse nowrap;
            align-items: center;
            font-weight: 500;
            font-size: 18px;
            line-height: 26px;
            transition: all .5s  ease-in-out;
            &:hover{
              color:#69B99D;
              transition: all .5s  ease-in-out;
              &::before{
                content:"";
                width: 6px;
                height: 6px;
                background: #69B99D;
                border-radius: 50%;
                margin-top: 1em;
              }
            }
          }
        }
        .buttons{
          display: flex;
          flex-flow: row nowrap;
          gap: 30px;
          .btn{
            cursor: pointer;
            padding: 16px 48px 15px;
            color:#69B99D;
            border: solid 1px #F5F5F5;
            transition: all .5s ease;
            &:hover{
              border: solid 1px #69B99D;
            }
          }
          .-verde{
            background: #69B99D;
            color: white;
            &:hover{
              background-color: #F5F5F5;
              color:#69B99D;
            }
          }
        }
      }
    }

    .text{
      width: 90%;
      max-width: 120rem;
      display: flex;
      flex-flow: column nowrap;
      align-items: flex-start;
      justify-content: space-between;
      gap: 0.825rem;
      margin-top: 6%;
      .title{
        width: 50%;
        .h1{
          font-family: 'Rubik';
          font-style: normal;
          font-weight: 600;
          font-size: 64px;
          line-height: 74px;  
          letter-spacing: 0.0025em;
          color: #1F2744;
        }
        .p{
          font-family: 'Poppins';
          font-style: normal;
          font-weight: 400;
          font-size: 16px;
          line-height: 24px;
          letter-spacing: 0.0025em;
          color: #73788C;
        }
      }
    }
    .epc{
      padding: 1em;
      display: flex;
      flex-flow: column nowrap;
      .buttons{
        display: flex;
        flex-flow: row nowrap;
        .btn{
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          padding: 12px 32px;
          gap: 10px;
          background: #FEFEFF;
          font-family: 'Poppins';
          font-style: normal;
          font-weight: 500;
          font-size: 24px;
          line-height: 32px;
          letter-spacing: 0.0025em;
          color: #69B99D;
        }
      }
      .search{
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        justify-content: space-around;
        padding: 1em;
        background: #FEFEFF;
        /* Shadow */
        gap: 50px;
        box-shadow: 35px 35px 65px rgba(146, 106, 120, 0.16);
        .options{
          display: flex;
          flex-flow: column nowrap;
          overflow: hidden;
          padding: 0 1em;
          h2{
            font-family: 'Poppins';
            font-style: normal;
            font-weight: 400;
            font-size: 18px;
            line-height: 26px;
            letter-spacing: 0.0025em;
            color: #1F2744;
          }
        }
      }
    }
  }
  .btn{
    cursor: pointer;
    padding: 16px 48px 15px;
    color:#69B99D;
    border: solid 1px #F5F5F5;
    transition: all .5s ease;
    &:hover{
      border: solid 1px #69B99D;
      box-shadow: 0px 0px 20px rgba(105, 185, 157, 0.58);
    }
  }
  .-verde{
    background: #69B99D;
    color: white;
    &:hover{
      background-color: #F5F5F5;
      color:#69B99D;
    
    }
  }
  .-inverso{
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    border: solid 1px #69B99D;
    padding: 12px auto;
    gap: 8px;
    &:hover{
      background: #69B99D;
      color: white;
      border: solid 1px #69B99D;
      box-shadow: 0px 0px 20px rgba(105, 185, 157, 0.58);
    }
  }
  @media screen and (max-width:1000px){
    .header .nav.activo{/*quando o botão estiver ativo */
      /*para suavizar o efeito apenas retirei a altura e depois adicionei com um transition */
      /*display: block;*/
      height: 90vh;
      pointer-events: auto;
      .ul{
        flex-direction: column;
      }
    }

    .header .li{
      margin: 1em 0;
    }
    .navigation .button {
      display: block; 
      cursor: pointer;
    }
    .nav{
      height: 0vh;
    }
    .navigation {
      width:auto;
      padding: 1em;
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-direction: column;
    }
    .wrapper{
      width: 95%;
      display: flex;
      flex-flow: row nowrap;
      align-items: center;
      justify-content: space-between;
    }

    .header .nav {
      width: 100%;
      /* display: none; */
      overflow: hidden;
      pointer-events: none;
      transition: all 0.5s ease-in-out;
      display: flex;
      flex-flow: row nowrap;
      align-items: center;
      justify-content: space-evenly;
      /* gap: 25%; */
      flex-direction: column;
    }
}

  @media(max-width:1000px) {
    .header {
      height: auto;
      .text .title {
        width: auto; 
      }
      .epc .search {
        display: flex;
        flex-flow: row nowrap;
        align-items: flex-start;
        justify-content: space-around;
        padding: 1em;
        background: #FEFEFF;
        gap: 50px;
        box-shadow: 35px 35px 65px rgb(146 106 120 / 16%);
        flex-direction: column;
      }
    }
  }


</style>
