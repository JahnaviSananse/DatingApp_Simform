import * as React from 'react';
import Svg, {Defs, Image, Path, Pattern, SvgProps, Use} from 'react-native-svg';

function SvgComponent(props: SvgProps) {
  return (
    <Svg width={26} height={26} viewBox="0 0 26 26" fill="none" {...props}>
      <Path fill="url(#prefix__pattern0)" d="M0 0h26v26H0z" />
      <Defs>
        <Pattern
          id="prefix__pattern0"
          patternContentUnits="objectBoundingBox"
          width={1}
          height={1}>
          <Use xlinkHref="#prefix__image0" transform="scale(.00926)" />
        </Pattern>
        <Image
          id="prefix__image0"
          width={108}
          height={108}
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGwAAABsCAMAAAC4uKf/AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAACl1BMVEVMaXFzbGWck4mwn42Ri4W8pIqjk4KfmJCOioa9pYyJh4bCqY+Hg39pYlttaWaAfnxzcW5sa2puamZcU0xURjtWT0eCgoKFhYWZmJh+fn56enqVko9nZ2diYWBxcXGxmoKokny1qZq8sKK3oYmcjHvCqI7JwLPh2s/z8en////9/fvu6eHRybyYhXHLspTPuqHY0sbx7ub6+fXUzcKnmYre1cnu7OPMw7fq5t37+/n49/Ln4tnj3tTl5OKPfWuIdWJ4bmTaxK+ooJWRiH56aFhoaGj19Ozk4t7X1M6bkYdtYVXKxsBpW0729e6hmZDy8fFiVkpcUUbDv7nS0M7QzMdWSj719fTh39rv7u3a19K1r6jEuq2LgXbAtaiAdGhxZ1x2dXWEenBPQjVENyaBgYGvqaO7ta6/u7SppJ6Liorb2deGhYXe29bo5+Xr6un39/eTkpDMzMzMpH6iZzCtgFa6hUrBmnO/j1ijVxiydS+nd0R8fHulWgWOUyDNllHmuV3pxG7dqVayYyKiRxCTQgKbRwCiTAGnTgGFPQCEXz7crmmqTBBxcHDx0nTCgDayUw+zXReqVASoUQKvWgasYAPZnkn33Xu6ciKtVgSyXgW1Ywi/ZBLHfiPOjT67WhK5agfFbxOyaQS8bwjSjij86oWXTwTBdQnIdxDPfxfEewrLgwvhqED/8ojIgAvPiQzWjxPalhrbny3uxVvMnma7dgf/8ozDwsLmrCbotkT75XSsjWnPjwzVlQ7gpBTuwTj00V7anA/boQ/ptzBeXFvzy0G2trXhqRH421v+7nxjY2LCgAjlrhLsuhb0yiznsxP41UH/7XX95Fvwwhz71ir93T7ft4Dpx5BuOgL744/54aLV1NTe3t6jaSBhBTsiAAAAH3RSTlMADC1EHHux3pjBXOLELExAmrZrqM4Yf+b+r8/MzdHMvpGXDwAAAAFiS0dEKcq3hSQAAAAHdElNRQfkCQ8QBRKGmqduAAAQeElEQVRo3u3a+VtT17oHcMDhIEVEbJ3OORcpCCRhFJIQIBASISHBBDInBAhkgowozkFE2lqLgCKIglgUREWLU1WcsCqtlmNrb8+99vbq/WPuu9begUQgQ58+56fzffoIFVyfvO9ae2XtJGFh/86/POERyyKW/yugiBUr/xIfvwWyMnLZnzz28ohlUEU4WdGyFaviURI+TUgELilpZdSfBcHQH23FSVy1ArIqETnJKakUFCotLSEpPT068k9oaPiKVYjJyIRkbE0kkpmVDYonFMq2nNz09PRI/PurY2LWrP5j1gqoKZPO2EYhqmDQmcysPJYHYkHyCwqRx04oKoqOjYwuRuFw1saFhzxTUFVJqlcR82F5kp9XwML15eUWFQGUlMvN5XG2by+NC3HFfbQ1I4/iNbg3tI1Mflmq50eFzBw+FbeAJSgXCmNDWhhQVr53EXMhGU/g+/lH4plIkbAiLiSLTlDbFibfNwQ3FyoLaRUVQS+UCLAo1B2pOxYZG7LDOwTn47GoFHHFumCxVVvTKFQWwpZyyoh4uHyf0kGTCCuDLG3F1kxo4bb8HR9W4QN96Hk1FrTyqrhgC6NR89EIZakLxi4rS01NXYSb6yl6iKBJq9YFuToyqSwYc0cZg1G2IKkMWvaCv1xYuqzq4yC7SGdtg3+RzWCgGlKzs3Ep2QziCy2P4VOmT7Kzsxk0FLni4yC7WKBEk8UowKOmehT0JRUNlk0q8D0DDZ03lwJIIYpKpPg4qE3ro615ajQx2Xm+XUQWLS+7jGRoaGw0cIon9BQ6nZ6FQtcwg8QyMwvy8OOl4S6SzURfUhl5BQyoFDkIIYbOmU8ahMlMS8vJ0gaJ5aSlFKrgQRfgvjEK8hCWXZCXnQq10kCCn6XQEUKMTSSZTHV1dTIzLUenWBcUlpwM3UhJKSyAynLo2TQazHpqKo0B3UPNw1IOUsixvVODAhxXoYgJCluVkQb9odMLC7LL6IVleIkRSw1TSEKQZ+xPF6SmRqdQfPxJUNiyrZ/iiaCn5Pms72yGh0rGDh44YWHKa6vAWv1JkDtIYnUazHIWaAxGHswSXuOorBQ6pjCEB84tT9IVFdUS4XC21wkrFSjCuNVBPl2vSExMhjWVk5WF1kFWSgF49AIGrTAlC1NYyk1KLyrevn27UCisgFRWVlZVVSkISVGnjwmysLCwlYmJ1cnJaAXjAJZTkwwgWNXISkiCQwA8/W/fXluvQ6mHquqEFZWgNRg4ukq9cU0I54/4RLSmmFlZaTnMrEIGLauGycjLScMdzEXHjeIiXrnYpDVbLBaz1tQoLufp6jl1FdBEg668wtgUEfwz9eqVcDoELScruQYwuL6hukJcF6KKeFyzRSqSC2Qaq0Ygl0vNWsQhrUrRIOYKbU0hnCTDP1kZvyWxujoNliW0ETYUBqMgB+YrIR0osVkqF9j5Dqca/nOyVRq5yAIaT1fLgfXRwA0RAy1yy5b46uocvEAKiTXPrE4oKi7KtYgEKodaonSxqEqlUuLk22UYK4dGIszUWNfUFNLRMTyKByd5mLacLGZNDewpaCFy4WhoFmnYaqWLStmWnUpgbA/GIzCtWYew5WuioqLWr4+KiggMRzWLc0FjpiXX1CTU1MBGyEwASyrgq134gMhK3QGYhFGg+gCzyLTNTRuaPLHZbNHrA6yXZRsbmVuSQKuuSSri1jBhdRQVJ4nsTiWiSkpAo1Jdymx4YtFIzWYvTK527MRMMw7mbJsi/GMmgTY9PRdhSZ/WVDOZuWBlFe7AZe3ahYtzKdV5KRoLWFpTOY/EZBQX32Licrl4j9HCN+Jm4PzdWUVsbNRIdenpNcRODpddcbHZnpKyjVIGtxo0GjqM7shMkaidInN8y26tKUmnq0W7VYOVKuHL4QFYpEwRBB6INsHUbDRG+sXsIsBy0YW8JammOqk4SaMuK6PS9uxFVeXTWNR9+/enqJ0W84GWlniTmFe/vQKuM4OKyoIlqoJLw6mGwIUoqjZbGo3GpTu5HDC5jpeejrD0opqa4mKpPZtFoaTuwy2kFVCpB/fvL0GV7W5pSZjHHBR870MhvlDVTqdKIBJZmo2b/GBcjBWRfUwoFmsKU2hopoj7NbhTo+/Zq1Y7ZWZzfILWhC5qtIMYnHg6lU6+VSaHXUbDdzr5giwtz2hc8koP37jRLuCVJxUlYS2huEgEVzYNDtdUKnkqZ7FcMGUFdimeFnK/qlQogVLbpY1ovQjrdGKpnc22C0w6tzHKH0ZvbW0tLiqCWzx4Njl0sO1we/uRPQc6Pvsc8sUXX3y2q2TXnqMoLfuPfglfvvj8GGQbxcWW8ioMZCp4FitbJdDqOMbYJfsImB2w1hZ89/rVoZY9R9rb2zvbACNy/Phnnx093tHx5dEvcTwYhcXW1hkMCiHHbbTZjF21XDmfb7fw6oyb/WAaFcJaD3311VeHDu0/0NbZ3t19uK2n4ziREyfgj46Ok72nIFgjMYmo1qBwo0vZtmGD0Wjkyh0OlZQndLv9Yn2t/f39fa37IR09pw93D3S3n+45c/IE5Dj648TJjpNneyGY82AOk6IK7VFr0K4YHmlsUkkcfFG5UO+OWBoTqDpa+weHICdPnhs+f7q9e2Cg/cj54a9RTpA5e/Zs71mkebBDFL64wWibv4SjjVYnmy0X13W5Y5bC/gLYgdb+oaGRc5ALw+ePtA8MDHQDdu7rc+dIsLevr+/sKfC8MKq9XGGzzQ8UaZSy+WwBt47jjlsak6kO9PdfHBm9gDI8BtglAjtHYoODp8Z7T40fxaV5sBaqtbzCtmF+oDijSaViaxo5de71S2F/3ShX9WDs8pUrF66OwZRdunSp+/DY8IVzZL4e7B3//Nj4UdRKL0zji60xbgTMbuII3bH+sD2AjY5euXLl6jx2evjCnHau7+j4+HhvH9FHEkMvhBi9sOWwQuxslRawTf6wff39UNjENbDGrgP2zaWBw6fHLpCByRzqg2sDzds8dpAl4Plg4W4jxmor/GEiO8YmJm/cuHnr9vU7GLtzfezqFZCgtRdGQRsaHBz0xVwywLyv3w1ugZ3N13Iql8ZWAvYtdPHuxDUSG7h07xuMXb2CAuLoyMgIcH24jyS2G2PRXiNtdsvtfHYA7P4cdvPmrakHHuw2aFdJ7QLGBn0x+QJMpAmARTZL7bsQNoksD/bwzoPbN2+QGixTqG2I7COJPVLKYRvc5INJBSq2qa5SHxsYe3zzya3pqaffPfwGsO8e3L518yZ4k5gbJfp41hsT6RbDGoUBsAyEXXv85Nnz6Rdz2BTGblybvDJx+fLoKDlpc9jexTCZis+tmNGvXxqzYGzixpNn09NTL74nsadTt27dQti1yQmkoT76YJJFMLlKJa6a0cctjf1gzySw59Mvp55+/wphPwI2DRihTU5cJidtHtsqkdbX+TxPut0iOV/DU8zqY/xhJf0X7/7DG7v346unL6afPUPaNZS5SfPBON4bE1zUIjlbXt/A0S95CFnvhb18/dPP89jU9PNnT3Bp1yY9kzaPZWDMa3ZWu21MucPCMei7/Bz2tfY0D/bmp59/efWfGPsesOlnT548RmsET5ovlqm2+GJx+mapTG2qaOha6xejY+zZPPYNxl56SkNLZBGs1geL1TdKBU6xQtEV6wcz2VMQ9vjZ9GuE/UpiTwEjSyOwER+sRG2u9Xma3KzXSu0anWGmK8YvVkhgMGX//K//nsN+ev0S1gju42KY0xeL0bvNIoe0ztDVtfSN2rLmRjt/cezN65fPcWnXJhdidKeZw3HPn0c36ZvNciVX4W/KwtYgbGgB9usvgL15Pf0B1ueFab2x5Xq9yWK31kMX4wJgZwjsjTf2M8aez2Gjo5dHvLBCwLzOUbF6m5bpNFcaSkv9vA4T0bzRrvoQu0dgr/F6fPz4BsIuo+U/jxU4THBo87zoslqvF2sFTp5BUbrW391gE2AHFsfeeGGXJy53Do8OzWE0H2xtly1B6rSgwmL8YMsR1rN0Gwls8vLERNvbttGRsx4sFWF6Eovt0nO1GocuQGEEticAhi7r4d8QNuTBdrAbAVtNWl3lCSKlSRGgsLDwpma7at9i2D+91/7kxOm33/YMjYz0khgVnib1BAYWj2thy+sMVf4LI7C2wNhkZ1vP0ODQyCCJUaAyPdrfw9ciy2zn8wwNpaUB3ppparKrvkXYc7/Y2PlhdOYZGfJgDm29Xh8eFrcZLLFZoxYbDLOlsWGBME0w2CTeib0wtahRr4+DsvRQl8bFVRhmAjSRxHYFxiYwNtfGQxSXw9rYBZSunGtRSRoVMGGlAV9X3dAkCAKDrRiw+QVyCL0g4TQ18crFWpHDIVbAqi8N/LrqhiaZKiMQNnF3Au9YI/3kXUwLYBK+3JyglWpcAp4BWTEBrbC/NslVmR9g9xZgF1svwnbVPz5+dB5zqVUCgV2tNnMMqIdBWGHRwWHj/4NyzAtDnIslkZdXGWBtBGUBJlKVBMRGW48RGNnGgwTmkHPRyxOzpX8L7r3P4LC7/ePHcGGn5jGWWmCCDqKy1gb5+n500307fbFd3xv7B8xXK9x9nvLcn+2GstgWXQPM1mxp8O/7b7JJA2NwmV3s72+dv7HYTVXaTUK8MEpjg37bIizSZrGnADZ2e+rF0+9/+fXhj2jpP4RDyIsXU1O3b98aGxsbHsZnOTh/e7BHLlVjpaEBqlobyqc1Im0/CAov3h0msFeA3bsHdxYYewHYbYwNXyAOjr29pzC2V22pQ9fW2piwsJAwrZw/dAaw6w+e3nn18OEljH333Z0HDx5cv+7BzpwBrG8eYzcqoIWxYaFlg80s5/ecGT5/+sjhO+0DA5cQdmmgu7v98OHDR46cPn3+/PmeHsDOeGMZ7MaKIK8t79OVrckid/x2puf8kc729u7fIYD9/vtAN3olsBO0tjakAdZxcg47lO801wex8X54F2PjWmRqaklbW2fn299++19PfoO8fdvZ2fltG2g9SOsAjcB20yhKubhrNsSPuoRF2+CIrqR8GCrLRYb40MmCX2CptLbZtaFZEdBFEZ9F8fkoEn6lWaLGkUiUSHRJ1A6+9Z1MJntnfe9wqikUp1Q8OxtiF40bLXIni+VCg0tgZKULF6Z0st+j8NkwMnjonZ/372Q7Ie/ew99RKBI5t2s2tBUSbTRZBGqXUu1Ag7Md+EEDpuZb8chEIfAgFmAsq8k9G9LSX260WUQqiQsNZbVagWMTr9c7rTvv4+yUgYZqRr/xDvMERmWbebN/DwWLMm4UyRwuhFnfvXuHNAfGHO/u/4AivY8qcSLMAZhspwzhCKOwtbrZmU9CmjKtnS9h4coWxSyAWb0wvEDYTtRGTblwZiYmpMpMLJfagQfCLYKhlOiNwPc7CYwsDX4DughTJhKhPr5nS9TWxgrDTEiVwZxJzSbTI5yDBx/lNppMZpTcg//nycHdj7bEx8dveXSwBf6vpeUg/MWjLY94CkPDTEhzFrbJaKsXVmaijwBm7N2bkWO1E0nbe4DMnn27MjJLSkrg5/v2QPbt3bsL/boGnqJnQttCwjcb3UKF9Q9EppiZWRcWWpZvcvtGT6aLTOlcZucyQyTUJxi076+P3uyT//DJ37zyd6+si/uDH6j8d0LN/wN+7nt3d8EHQQAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMC0wOS0xNVQxNjowNTowNyswMDowMDFEJhsAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjAtMDktMTVUMTY6MDU6MDcrMDA6MDBAGZ6nAAAAAElFTkSuQmCC"
        />
      </Defs>
    </Svg>
  );
}

const AlcoholIcon2: React.FunctionComponent<SvgProps> = React.memo(
  SvgComponent,
);
export default AlcoholIcon2;