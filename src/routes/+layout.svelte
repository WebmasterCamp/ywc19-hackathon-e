<script lang="ts">
  import { onMount } from 'svelte';
	import '../app.postcss';
	onMount(()=>{
		Notification.requestPermission();
	})
</script>

<slot />
