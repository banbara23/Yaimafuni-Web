<template>
	<div id="port">
		<div class="card collection with-header">
			<div class="collection-header orange darken-1 white-text">
				<h5>{{title}}</h5>
			</div>
			<router-link :to="{ path:`detail/${portCode}/anei` }"
			             v-if="data.anei"
			             class="collection-item black-text">
				<div class="row">
					安栄観光
					<badge v-if="data.anei.status"
								 :status="data.anei.status" />
				</div>
			</router-link>
			<router-link :to="{ path:`detail/${portCode}/ykf` }"
			             v-if="data.ykf"
			             class="collection-item black-text">
				<div class="row">
					八重山観光フェリー
					<badge v-if="data.ykf.status"
								 :status="data.ykf.status" />
				</div>
				</span>
			</router-link>
	
			<router-link :to="{ path:`detail/${portCode}/dream` }"
			             v-if="data.dream"
			             class="collection-item black-text">
				<div class="row">
					石垣ドリーム観光
					<badge v-if="data.dream.status"
								 :status="data.dream.status" />
				</div>
				</span>
			</router-link>
		</div>
	</div>
</template>
  
<script>
import badge from './Badge'
export default {
	name: 'port',
	props: ['data', 'title', 'portCode'],
	components: {
		badge
	},
	computed: {
		aneiColor: function () {
			if (this.data.anei.status.code == 'normal') {
				return {
					blue: true
				}
			}
			else if (this.data.anei.status.code == 'cancel') {
				return {
					red: true
				}
			}
			else if (this.data.anei.status.code == 'cation') {
				return {
					orange: true
				}
			}
			else if (this.data.anei.status.code == 'suspend') {
				return {
					red: true
				}
			}
			else {
				return {
					orange: true
				}
			}
		},
		ykfColor: function () {
			if (this.data.ykf.status.code == 'normal') {
				return {
					blue: true
				}
			}
			else if (this.data.ykf.status.code == 'cancel') {
				return {
					red: true
				}
			}
			else if (this.data.ykf.status.code == 'cation') {
				return {
					orange: true
				}
			}
			else if (this.data.ykf.status.code == 'suspend') {
				return {
					red: true
				}
			}
			else {
				return {
					orange: true
				}
			}
		},
		dreamColor: function () {
			if (this.data.dream.status.code == 'normal') {
				return {
					blue: true
				}
			}
			else if (this.data.dream.status.code == 'cancel') {
				return {
					red: true
				}
			}
			else if (this.data.dream.status.code == 'cation') {
				return {
					orange: true
				}
			}
			else if (this.data.dream.status.code == 'suspend') {
				return {
					red: true
				}
			}
			else {
				return {
					orange: true
				}
			}
		}
	}
}
</script>

<style>
/*span#badge {
	font-weight: 300;
	border-radius: 2px;
	background-clip:padding-box;
}*/
</style>

