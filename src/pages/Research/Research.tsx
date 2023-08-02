import React from "react";
import { Header, Footer } from "../../components";
import "./Research.css";
interface Props {}
const Research: React.FC<Props> = () => {
  return (
    <div className="research">
      <Header />
      <div className="research__main">
        <div className="research__main__content">
          <div className="research__main__content__item">
            <h2>RESEARCH PUBLICATIONS</h2>

            <ol>
              <li>
                Sibanda, K; Gonese, D &amp; <b>Garidzirai, R.</b> 2023. Human
                Capital and Environmental Sustainability Nexus in Selected SADC
                Countries. Resources 12 (4), 52
              </li>
              <li>
                K Sibanda, <b>R Garidzirai</b>, F Mushonga, D Gonese. 2023.
                Natural resource rents, institutional quality, and environmental
                degradation in resource-rich Sub-Saharan African countries.
                Sustainability 15 (2), 1141
              </li>
              <li>
                Moyo, C &amp; <b>Garidzirai, R.</b> 2022. Trade balance and
                economic growth: Evidence from African countries. International
                Journal of Trade and Global Markets 15 (4), 497-515
              </li>
              <li>
                <b>Garidzirai, R.</b> 2022. The role of international tourism on
                foreign trade in the BRICS countries. Cogent Social Sciences
                8(1).
              </li>
              <li>
                <b>Garidzirai, R </b>&amp; Mapanga, A. 2022 An investigation of
                the macroeconomic determinants of consumption spending in South
                Africa. Acta Universitatis Danubius Œconomica 18 (5)
              </li>
              <li>
                Mhlanga, D &amp; <b>Garidzirai, R.</b> 2022 Demand for Mobile
                Broadband Use by South African Households: Does Gender Matter.
                African Journal of Gender, Society &amp; Development 11 (4), 135
              </li>
              <li>
                Lefatsa, P.M, Sibanda, K &amp; <b>Garidzirai, R.</b> 2021. The
                Relationship between Financial Development and Energy
                Consumption in South Africa. Economies 9: 158. https://doi.org/
                10.3390/economies9040158
              </li>
              <li>
                <b>Garidzirai, R.</b> 2021. An autoregressive distributive lag
                analysis of crime &amp; tourism in the western Cape Province,
                South Africa. GeoJournal of Tourism and Geosites, 35(2):
                304-308.
              </li>
              <li>
                <b>Garidzirai, R </b>&amp; Matiza, T. 2020. Exploring the
                tourism-poverty alleviation nexus in the BRICS group of nations.
                Ekonomika, 99(1): 93–109
              </li>

              <li>
                <b>Garidzirai, R </b>&amp; Muzindutsi, P.F. 2020. A panel
                analysis of the productivity of key economic sectors
                contributing to economic growth in the Capricorn district
                municipal area. Studia Universitatis Babeş- Bolyai Oeconomica,
                65(1): 39-53
              </li>
              <li>
                <b>Garidzirai, R </b>&amp; Moyo, C. 2020. Tourism, Poverty and
                Carbon Emissions in Newly Industrialized Countries. Journal of
                Environmental management and tourism, 11(3): 653 - 668
              </li>
              <li>
                Pasara, M.T &amp; <b>Garidzirai, R.</b> 2020. The Boomerang
                Effects: An Analysis of the Pre and Post Dollarisation Era in
                Zimbabwe. Economies, 8(2): 1-20
              </li>
              <li>
                Mhlanga, D &amp; <b>Garidzirai, R.</b> 2020. The Influence of
                Racial Differences in the Access to healthcare in South Africa:
                A case of public healthcare. International Journal of
                Environmental Research and Public Health, 17(14): 1-10
              </li>
              <li>
                Mhlanga, D &amp; <b>Garidzirai, R.</b> 2020. Race and Energy
                demand Explained in South Africa: The case of electricity.
                Eurasian Journal of Business and Management, 8(3): 191 -204
              </li>
              <li>
                <b>Garidzirai, R </b>&amp; Pasara, M. T. 2020. An analysis of
                the contribution of tourism on economic growth in South African
                provinces: A panel analysis. GeoJournal of Tourism and Geosites,
                28(2): 554-564
              </li>
              <li>
                Pasara, M. T &amp; <b>Garidzirai, R.</b> 2020. Causality Effects
                among Gross Capital Formation, Unemployment and Economic Growth
                in South Africa. Economies, 8(2): 1-12
              </li>
              <li>
                <b>Garidzirai, R </b>&amp; Meyer, D. 2020. The impact of
                economic sectors on local economic development: The case of the
                Capricorn region, Limpopo Province South Africa. International
                Journal of Economics and Finance studies 2019, 11(2): 19-34
              </li>
            </ol>

            {/* <ol>
              <li>
                Moyo, C &amp; <b>Garidzirai, R.</b> 2022.{" "}
                <a href="https://scholar.google.co.za/citations?view_op=view_citation&hl=en&user=tAdcX54AAAAJ&cstart=20&pagesize=80&citation_for_view=tAdcX54AAAAJ:QIV2ME_5wuYC">
                  Trade balance and economic growth: Evidence from African
                  countries
                </a>
                . <em>International Journal of Trade and Global Markets 15</em>{" "}
                (4), 497-515
              </li>
              <li>
                <b>Garidzirai, R.</b> 2022. The role of international tourism on
                foreign trade in the BRICS countries. Cogent Social Sciences
                8(1).
              </li>
              <li>
                <b>Garidzirai, R</b> & Mapanga, A. 2022{" "}
                <a href="https://scholar.google.co.za/citations?view_op=view_citation&hl=en&user=tAdcX54AAAAJ&cstart=20&pagesize=80&citation_for_view=tAdcX54AAAAJ:dhFuZR0502QC">
                  An investigation of the macroeconomic determinants of
                  consumption spending in South Africa.
                </a>{" "}
                <em>Acta Universitatis Danubius Œconomica</em> 18 (5)
              </li>
              <li>
                Mhlanga, D & <b>Garidzirai, R.</b> 2022{" "}
                <a href="https://scholar.google.co.za/citations?view_op=view_citation&hl=en&user=tAdcX54AAAAJ&cstart=20&pagesize=80&citation_for_view=tAdcX54AAAAJ:7PzlFSSx8tAC">
                  Demand for Mobile Broadband Use by South African Households
                </a>
                : Does Gender Matter.{" "}
                <em>African Journal of Gender, Society & Development 11</em>{" "}
                (4), 135
              </li>
              <li>
                Lefatsa, P.M, Sibanda, K & <b>Garidzirai, R</b>. 2021. The
                Relationship between Financial Development and Energy
                Consumption in South Africa. Economies 9: 158. https://doi.org/
                10.3390/economies9040158
              </li>
              <li>
                Ntshwe, I & Garidzirai R. 2021. Exploring the Influence of
                Commodity Prices, Real Exchange Rate and Trade Openness on
                Economic Performance in an Emerging Country. International
                Journal of Financial Research, 12(5)
              </li>
              <li>
                <b>Garidzirai, R</b>. 2021. An autoregressive distributive lag
                analysis of crime & tourism in the western Cape Province, South
                Africa. GeoJournal of Tourism and Geosites, 35(2): 304-308.
              </li>
              <li>
                Makwembere, S & <b>Garidzirai, R</b>. 2021. A case for ethics
                frameworks to enhance mobile government implementation at South
                African municipalities. The Journal for Transdisciplinary
                Research in Southern Africa, 17(1): 1-8.
              </li>
              <li>
                <b>Garidzirai, R</b> & Matiza, T. 2020. Exploring the
                tourism-poverty alleviation nexus in the BRICS group of nations.
                Ekonomika, 99(1): 93–109
              </li>
              <li>
                <b>Garidzirai, R</b> & Chikuruwo, R. E. 2020. An Economic
                Analysis of the Social Grant Policy in South Africa. Journal of
                Advanced Law and Economics, 11(2): 362-369
              </li>
              <li>
                <b>Garidzirai, R</b> & Muzindutsi, P.F. 2020. A panel analysis
                of the productivity of key economic sectors contributing to
                economic growth in the Capricorn district municipal area. Studia
                Universitatis Babeş-Bolyai Oeconomica, 65(1): 39-53
              </li>
              <li>
                <b>Garidzirai, R</b> & Moyo, C. 2020. Tourism, Poverty and
                Carbon Emissions in Newly Industrialized Countries. Journal of
                Environmental management and tourism, 11(3): 653 - 668
              </li>
              <li>
                Pasara, M.T & <b>Garidzirai, R</b>. 2020. The Boomerang Effects:
                An Analysis of the Pre and Post Dollarisation Era in Zimbabwe.
                Economies, 8(2): 1-20
              </li>
              <li>
                Mhlanga, D & <b>Garidzirai, R</b>. 2020. The Influence of Racial
                Differences in the Access to healthcare in South Africa: A case
                of public healthcare. International Journal of Environmental
                Research and Public Health, 17(14): 1-10
              </li>
              <li>
                <b>Garidzirai, R</b>. 2020. Covid-19 and its economic impact on
                the South African economy. AfricaGrowth Agenda, 17(3): 10-12
              </li>
              <li>
                <b>Garidzirai, R</b>. 2020. Time series analysis of carbon
                dioxide emission, population, carbon tax and energy use in South
                Africa. International Journal of Energy Economics and policy,
                10(5): 353-360.
              </li>
              <li>
                <b>Garidzirai, R</b> & Meyer D. 2020. The Contribution of Key
                Economic Sectors on Poverty Alleviation in the Capricorn
                District Municipality: A Panel ARDL Model. African Journal of
                Business and Economic Research, 15(2): 159 –172
              </li>
              <li>
                Mhlanga, D & <b>Garidzirai, R</b>. 2020. Race and Energy demand
                Explained in South Africa: The case of electricity. Eurasian
                Journal of Business and Management, 8(3): 191 -204
              </li>
              <li>
                <b>Garidzirai, R</b> & Pasara, M. T. 2020. An analysis of the
                contribution of tourism on economic growth in South African
                provinces: A panel analysis. GeoJournal of Tourism and Geosites,
                28(2): 554-564
              </li>
              <li>
                Pasara, M. T & <b>Garidzirai, R</b>. 2020. Causality Effects
                among Gross Capital Formation, Unemployment and Economic Growth
                in South Africa. Economies, 8(2): 1-12
              </li>
              <li>
                <b>Garidzirai, R</b> & Bulelwa Nguza-Mduba. 2020. Does tourism
                contribute to local economic development (LED) in the City of
                Cape Town Municipality? A time-series analysis. Journal of
                Hospitality, Tourism and Leisure, 9(1): 1-13
              </li>
              <li>
                <b>Garidzirai, R</b>. 2020. The contribution of agricultural
                production on selected Sustainable Development Goals in the
                BRICS bloc: A Panel Analysis. Eurasian Journal of Economics and
                Finance, 8(3): 154-167
              </li>
              <li>
                Sekwaila, C & <b>Garidzirai, R</b>. 2020. Education, poverty and
                economic growth nexus in South Africa: A trivariate granger
                approach. African Journal of Development Studies, 10(4): 63-75
              </li>
              <li>
                <b>Garidzirai, R</b>. 2020. An economic analysis of Local
                Economic Development and Exports: A case study of the Rand West
                Local Municipality. Journal of Public Administration, 54(4.1):
                728-738
              </li>
              <li>
                <b>Garidzirai, R</b> & Meyer, D. 2020. The impact of economic
                sectors on local economic development: The case of the Capricorn
                region, Limpopo Province South Africa. International Journal of
                Economics and Finance studies 2019, 11(2): 19-34
              </li>
              <li>
                <b>Garidzirai, R</b> & Meyer, D. 2019. Econometric examination
                of the impact of productivity in economic sectors on total
                employment in the Capricorn District Municipality, South Africa.
                Journal of Public Administration, 54(4.1): 908-917
              </li>
              <li>
                <b>Garidzirai, R</b>. An analysis of crime and economic
                development in the Gauteng province: a time series analysis.
                International Conference of Social Science, Conference
                Proceeding, 2019.
              </li>
              <li>
                Zhanje, S & <b>Garidzirai, R</b>. Export Performance and Foreign
                Direct Investment in Zimbabwe: An ARDL Approach. International
                Conference on Public
              </li>
              <li>
                Sibanda, K; Gonese, D &amp; <b>Garidzirai, R</b>. 2023. Human
                Capital and Environmental Sustainability Nexus in Selected SADC
                Countries. Resources 12 (4), 52
              </li>
              <li>
                K Sibanda, <b>R Garidzirai</b>, F Mushonga, D Gonese. 2023.
                Natural resource rents, institutional quality, and environmental
                degradation in resource-rich Sub-Saharan African countries.
                Sustainability 15 (2), 1141
              </li>
            </ol> */}
            <h2>BOOK CHAPTERS</h2>
            <ul>
              <li>
                Garidzirai, R. 2021. An analysis of macroeconomic objectives and
                crime in selected Gauteng local municipalities. Standard of
                Living, Wellbeing, and Community Development: IntechOpen
              </li>
              <li>
                Ganda, F & Garidzirai, R. 2021.{" "}
                <a href="https://www.intechopen.com/online-first/the-environmental-influence-of-tax-regimes-in-selected-european-union-economies">
                  The Environmental Influence of Tax Regimes in Selected
                  European Union Economies
                </a>
                . Green Technologies and Computing Industry: IntechOpen
              </li>
            </ul>
            <h2>CONFERENCE PRESENTATIONS</h2>
            <ul>
              <li>
                <b>
                  10th International Conference of Social Science,
                  Vanderbjlpark, South Africa, 2019
                </b>
                : An analysis of crime and economic development in the Gauteng
                province: a time series analysis.
              </li>
              <li>
                <b>
                  3rd Annual International Conference on Public Administration
                  and Development Alternatives, Saldana Bay, South Africa
                </b>
                : Export Performance and Foreign Direct Investment in Zimbabwe:
                An ARDL Approach.
              </li>
              <li>
                <b>
                  9th International Conference of Social Science, George, South
                  Africa, 2018
                </b>
                . The impact of economic sectors on local economic development:
                The case of the Capricorn region, Limpopo Province South Africa.
              </li>
              <li>
                <b>
                  2nd Annual International Conference on Public Administration
                  and Development Alternatives, Gaborone, Botswana
                </b>
                : The impact of themanufacturing sector on economic growth in
                South Africa
              </li>
            </ul>
            <h2>Journal reviewer for the following journals</h2>
            <ul>
              <li>
                International Journal of Environmental Research and Public
                Health
              </li>
              <li>Sustainability</li>
              <li>Cogent Economics and Finance</li>
              <li>Journal of Economic and Financial Sciences</li>
              <li>African Journal of Economic and Management Studies</li>
              <li>African Journal of Business and Economic Research</li>
              <li>African Journal of Development Studies</li>
              <li>Journal of Public administration</li>
              <li>International Journal of Financial research</li>
            </ul>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Research;
