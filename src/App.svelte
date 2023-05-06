<script lang="ts">
  import {GM_setValue, GM_getValue} from '$';
  import {onMount} from "svelte";

  // save global speed
  let globalSpeed = GM_getValue('globalSpeed') ?? 1;
  // show speed label
  let showSpeedLabel


  onMount(() => {
    const video = document.querySelector('video');
    const parent = video.parentElement;
    let timer

    parent.style.position = 'relative'
    parent.appendChild(showSpeedLabel);


    // init speed
    video.playbackRate = globalSpeed;
    showSpeedLabel.innerText = video.playbackRate
    showSpeed()


    // listen keydown
    document.addEventListener('keydown', function (event) {
      const key = event.key.toLowerCase();
      switch (key) {
        case 'c': {
          video.playbackRate += 0.25;
          showSpeedLabel.innerText = video.playbackRate
          showSpeed()
          break;
        }
        case 'x': {
          video.playbackRate -= 0.25;
          showSpeedLabel.innerText = video.playbackRate
          showSpeed()
          break;
        }
        case 'z': {
          video.playbackRate = 1;
          showSpeedLabel.innerText = video.playbackRate
          showSpeed()
          break;
        }
      }
      // save speed
      GM_setValue('globalSpeed', video.playbackRate, true)
    })

    // show speed label
    function showSpeed() {
      showSpeedLabel.style.visibility = 'visible'
      if (timer) {
        clearTimeout(timer)
      }
      timer = setTimeout(() => {
        showSpeedLabel.style.visibility = 'hidden'
      }, 700)
    }


  })

</script>

<div id="showSpeedLabel" bind:this={showSpeedLabel}>
</div>

<style lang="scss">
  #showSpeedLabel {
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 9999;
    font-size: 30px;
    background-color: wheat;
    color: black;
  }
</style>
