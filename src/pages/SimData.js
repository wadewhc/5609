const SimData = {'AK': {'30-45': {'cutting': 4, 'guns': 3, 'personal': 2}, 
                 '17-30': {'guns': 8, 'personal': 2, 'cutting': 2}, 
                 '45+': {'guns': 4, 'personal': 1, 'cutting': 1}, 
                 '<16': {'guns': 1}}, 

                'AL': {'17-30': {'guns': 69, 'firearm': 40, 'personal': 5},
                 '30-45': {'guns': 30, 'firearm': 23, 'cutting': 9}, 
                 '45+': {'guns': 15, 'firearm': 5, 'personal': 2}, 
                 '<16': {'guns': 7, 'firearm': 1}}, 
                 
                'AR': {'30-45': {'guns': 22, 'firearm': 7, 'cutting': 4}, 
                 '45+': {'guns': 11, 'firearm': 5, 'cutting': 3}, 
                 '17-30': {'guns': 38, 'firearm': 32, 'personal': 2}, 
                 '<16': {'firearm': 6, 'guns': 6}},

                'AZ': {'30-45': {'guns': 54, 'cutting': 13, 'firearm': 11},
                 '45+': {'guns': 27, 'firearm': 6, 'blunt': 2},
                 '17-30': {'guns': 98, 'firearm': 16, 'cutting': 7},
                 '<16': {'guns': 3, 'firearm': 2}}, 

                'CA': {'17-30': {'guns': 251, 'firearm': 122, 'cutting': 81},
                 '45+': {'guns': 97, 'cutting': 38, 'firearm': 25},
                 '<16': {'guns': 20, 'firearm': 13, 'cutting': 6},
                 '30-45': {'guns': 164, 'firearm': 70, 'cutting': 63}},
                   
                'CO': {'17-30': {'guns': 71, 'firearm': 16, 'cutting': 5},
                 '30-45': {'guns': 54, 'cutting': 14, 'firearm': 8}, 
                 '<16': {'guns': 6, 'cutting': 4, 'firearm': 1}, 
                 '45+': {'guns': 25, 'cutting': 5, 'personal': 4}}, 
                 
                'CT': {'17-30': {'firearm': 15, 'guns': 6, 'cutting': 2},
                 '30-45': {'firearm': 15, 'cutting': 4, 'guns': 2}, 
                 '45+': {'firearm': 3, 'cutting': 2, 'personal': 2},
                 '<16': {'guns': 1, 'firearm': 1, 'cutting': 1}}, 
                 
                'Federal': {'17-30': {'guns': 5, 'cutting': 2, 'blunt': 2},
                 '30-45': {'firearm': 2, 'cutting': 1, 'blunt': 1},
                  '45+': {'firearm': 2, 'cutting': 1, 'guns': 1}},
                
                'DC': {'17-30': {'guns': 24, 'firearm': 3, 'cutting': 1}, 
                '30-45': {'guns': 9, 'cutting': 4, 'personal': 1}, 
                '45+': {'guns': 3, 'firearm': 1}, '<16': {'guns': 1}}, 
                
                'DE': {'17-30': {'guns': 9, 'firearm': 5, 'cutting': 3}, 
                '45+': {'guns': 3, 'cutting': 3, 'firearm': 1}, 
                '<16': {'firearm': 1}, 
                '30-45': {'guns': 3, 'cutting': 1}},
                
                'FL': {'17-30': {'guns': 43, 'firearm': 32, 'personal': 5}, 
                '45+': {'guns': 12, 'firearm': 8, 'personal': 5}, 
                '30-45': {'guns': 23, 'firearm': 15, 'cutting': 6}, 
                '<16': {'firearm': 2, 'guns': 1}}, 
                
                'GA': {'17-30': {'guns': 148, 'firearm': 72, 'cutting': 9},
                 '30-45': {'guns': 65, 'firearm': 29, 'cutting': 12},
                  '45+': {'guns': 36, 'firearm': 19, 'cutting': 9}, 
                  '<16': {'guns': 15, 'firearm': 6}}, 
                
                'GU  ': {'30-45': {'cutting': 1}}, 

                'HI': {'45+': {'cutting': 4}, 
                '30-45': {'guns': 3, 'cutting': 3, 'personal': 1}, 
                '17-30': {'guns': 4, 'cutting': 1, 'personal': 1}}, 
                
                'IA  ': {'45+': {'guns': 3, 'firearm': 2, 'cutting': 2},
                 '30-45': {'guns': 6, 'personal': 2, 'cutting': 2}, 
                 '17-30': {'guns': 7, 'firearm': 3, 'personal': 2}}, 

                 'ID ': {'30-45': {'guns': 8, 'firearm': 4, 'cutting': 2}, 
                 '17-30': {'guns': 11, 'cutting': 2, 'firearm': 1}, 
                 '45+': {'guns': 8, 'personal': 2, 'blunt': 2}}, 

                'IL': {'30-45': {'guns': 41, 'cutting': 15, 'firearm': 12},
                '17-30': {'guns': 115, 'firearm': 20, 'cutting': 13}, 
                '45+': {'guns': 11, 'cutting': 9, 'firearm': 5},
                '<16': {'guns': 11, 'firearm': 2, 'cutting': 1}},

                'IN': {'17-30': {'guns': 64, 'firearm': 19, 'cutting': 7},
                '30-45': {'guns': 33, 'cutting': 8, 'firearm': 8}, 
                '<16': {'guns': 6}, 
                '45+': {'guns': 17, 'firearm': 5, 'cutting': 3}}, 

                'KS': {'30-45': {'guns': 13, 'firearm': 5, 'cutting': 3},
                '45+': {'guns': 11, 'firearm': 4, 'blunt': 3}, 
                '17-30': {'guns': 20, 'cutting': 7, 'firearm': 5}, 
                '<16': {'guns': 2, 'firearm': 1}}, 
                
                'KY': {'30-45': {'guns': 34, 'firearm': 11, 'cutting': 7}, 
                '17-30': {'guns': 43, 'firearm': 11, 'cutting': 5}, 
                '<16': {'guns': 4, 'firearm': 2}, 
                '45+': {'guns': 30, 'cutting': 4, 'drugs': 3}}, 
                
                'LA': {'30-45': {'guns': 9, 'firearm': 6, 'blunt': 2}, 
                '17-30': {'firearm': 24, 'guns': 14, 'blunt': 2}, 
                '45+': {'firearm': 3, 'guns': 2, 'blunt': 1}, 
                '<16': {'firearm': 2, 'guns': 1}}, 
                
                'MA': {'45+': {'cutting': 7, 'drugs': 1, 'guns': 1}, 
                '17-30': {'guns': 11, 'firearm': 9, 'cutting': 5}, 
                '30-45': {'firearm': 10, 'guns': 9, 'cutting': 8}, 
                '<16': {'guns': 1}}, 
                
                'MD': {'17-30': {'guns': 41, 'firearm': 24, 'cutting': 14}, 
                '30-45': {'guns': 20, 'firearm': 10, 'cutting': 8}, 
                '<16': {'guns': 7, 'firearm': 6, 'cutting': 1}, 
                '45+': {'guns': 4, 'firearm': 3, 'cutting': 3}}, 

                'ME ': {'30-45': {'guns': 4, 'firearm': 4, 'cutting': 3}, 
                '45+': {'guns': 4, 'firearm': 1}, 
                '17-30': {'guns': 5, 'firearm': 1, 'cutting': 1}, 
                '<16': {'cutting': 1, 'guns': 1}}, 
                
                'MI': {'17-30': {'guns': 34, 'firearm': 26, 'personal': 7}, 
                '45+': {'guns': 16, 'cutting': 6, 'blunt': 3}, 
                '30-45': {'guns': 26, 'firearm': 12, 'cutting': 4}, 
                '<16': {'guns': 3, 'firearm': 3, 'cutting': 1}}, 
                
                'MN': {'17-30': {'firearm': 21, 'guns': 14, 'cutting': 2}, 
                '30-45': {'firearm': 14, 'guns': 9, 'cutting': 5}, 
                '45+': {'guns': 3, 'personal': 3, 'cutting': 3}, 
                '<16': {'guns': 2, 'firearm': 1}}, 
                
                'MO': {'<16': {'guns': 4, 'cutting': 2, 'fire': 1}, 
                '17-30': {'guns': 100, 'firearm': 63, 'cutting': 3}, 
                '30-45': {'guns': 52, 'firearm': 30, 'blunt': 8}, 
                '45+': {'guns': 35, 'firearm': 11, 'cutting': 4}}, 
                
                'MS': {'45+': {'guns': 6, 'cutting': 2, 'firearm': 1}, 
                '30-45': {'guns': 13, 'firearm': 6, 'blunt': 2}, 
                '17-30': {'guns': 17, 'firearm': 10, 'cutting': 1}, 
                '<16': {'guns': 3, 'firearm': 2}}, 
                
                'MT': {'17-30': {'guns': 8, 'cutting': 5, 'firearm': 4}, 
                '45+': {'guns': 6, 'firearm': 2, 'cutting': 2}, 
                '30-45': {'cutting': 2, 'guns': 1, 'firearm': 1},
                '<16': {'cutting': 1}}, 
                 
                'NE': {'17-30': {'guns': 2, 'cutting': 1}, 
                '45+': {'cutting': 3, 'firearm': 1},
                '30-45': {'cutting': 2, 'personal': 2, 'guns': 2}, 
                '<16': {'cutting': 1}}, 
                
                'NC ': {'30-45': {'guns': 71, 'firearm': 28, 'cutting': 9},
                '17-30': {'guns': 137, 'firearm': 75, 'personal': 13}, 
                '<16': {'guns': 15, 'firearm': 10}, 
                '45+': {'guns': 39, 'firearm': 17, 'cutting': 11}}, 
                
                'NH': {'17-30': {'firearm': 3, 'guns': 2, 'cutting': 2}, 
                '30-45': {'guns': 3, 'cutting': 2, 'personal': 1}, 
                '45+': {'guns': 1, 'firearm': 1}}, 
                
                'NJ': {'17-30': {'guns': 46, 'cutting': 15, 'firearm': 11}, 
                '30-45': {'cutting': 14, 'firearm': 13, 'guns': 11}, 
                '45+': {'guns': 7, 'cutting': 5, 'personal': 3}, 
                '<16': {'guns': 4, 'personal': 1, 'firearm': 1}}, 
                
                'NM': {'17-30': {'guns': 26, 'firearm': 8, 'cutting': 3}, 
                '30-45': {'guns': 11, 'firearm': 7, 'cutting': 4}, 
                '45+': {'guns': 4, 'firearm': 1, 'cutting': 1}, 
                '<16': {'guns': 2}}, 
                
                'NV': {'17-30': {'firearm': 33, 'guns': 15, 'cutting': 8}, 
                '45+': {'guns': 15, 'firearm': 10, 'cutting': 5}, 
                '30-45': {'firearm': 20, 'guns': 14, 'cutting': 11}, 
                '<16': {'firearm': 2, 'guns': 2, 'drugs': 1}}, 

                'NY': {'17-30': {'guns': 122, 'cutting': 53, 'firearm': 21}, 
                '45+': {'cutting': 32, 'guns': 27, 'personal': 11}, 
                '30-45': {'guns': 63, 'cutting': 53, 'firearm': 12}, 
                '<16': {'guns': 6, 'cutting': 4, 'personal': 2}}, 
                
                'OH  ': {'30-45': {'guns': 40, 'firearm': 28, 'cutting': 10}, 
                '17-30': {'guns': 67, 'firearm': 57, 'cutting': 10}, 
                '45+': {'firearm': 18, 'guns': 11, 'cutting': 9}, 
                '<16': {'firearm': 8, 'guns': 7, 'cutting': 2}}, 
                
                'OK': {'17-30': {'guns': 47, 'firearm': 18, 'cutting': 15}, 
                '45+': {'guns': 20, 'cutting': 8, 'personal': 3}, 
                '30-45': {'guns': 24, 'cutting': 16, 'personal': 6}, 
                '<16': {'guns': 8, 'firearm': 1}}, 
                
                'OR': {'17-30': {'guns': 10, 'firearm': 3, 'cutting': 2}, 
                '45+': {'guns': 4, 'blunt': 1, 'cutting': 1}, 
                '30-45': {'guns': 9, 'firearm': 4, 'cutting': 3}, 
                '<16': {'guns': 2, 'cutting': 1, 'firearm': 1}}, 
                
                'PA': {'17-30': {'guns': 131, 'firearm': 17, 'cutting': 16}, 
                '45+': {'guns': 31, 'firearm': 4, 'drugs': 4}, 
                '30-45': {'guns': 66, 'cutting': 15, 'firearm': 9}, 
                '<16': {'guns': 12, 'firearm': 1, 'cutting': 1}}, 
                
                'RI ': {'17-30': {'cutting': 4, 'firearm': 3, 'guns': 2}, 
                '30-45': {'firearm': 2, 'cutting': 1, 'blunt': 1}, 
                '45+': {'guns': 2}}, 
                
                'SC ': {'30-45': {'guns': 66, 'firearm': 21, 'cutting': 13}, 
                '17-30': {'guns': 106, 'firearm': 65, 'cutting': 9}, 
                '45+': {'guns': 32, 'firearm': 12, 'blunt': 5}, 
                '<16': {'firearm': 10, 'guns': 8, 'blunt': 1}}, 
                
                'TN': {'30-45': {'guns': 43, 'firearm': 36, 'cutting': 13}, 
                '17-30': {'guns': 83, 'firearm': 73, 'cutting': 10}, 
                '45+': {'guns': 27, 'firearm': 15, 'cutting': 8}, 
                '<16': {'firearm': 7, 'guns': 4, 'cutting': 1}}, 
                
                'TX ': {'30-45': {'guns': 171, 'firearm': 115, 'cutting': 51}, 
                '17-30': {'guns': 339, 'firearm': 268, 'cutting': 61}, 
                '45+': {'guns': 73, 'firearm': 55, 'cutting': 30}, 
                '<16': {'guns': 34, 'firearm': 22, 'cutting': 4}}, 
                
                'UT  ': {'17-30': {'guns': 9, 'firearm': 5, 'cutting': 2}, 
                '30-45': {'guns': 4, 'cutting': 3, 'firearm': 2}, 
                '45+': {'guns': 1, 'personal': 1, 'firearm': 1}, 
                '<16': {'guns': 1}}, 
                
                'VA': {'17-30': {'guns': 99, 'firearm': 57, 'personal': 10}, 
                '30-45': {'guns': 62, 'firearm': 30, 'cutting': 11}, 
                '45+': {'guns': 23, 'firearm': 9, 'cutting': 7}, 
                '<16': {'guns': 6, 'cutting': 1, 'firearm': 1}}, 
                
                'VT': {'17-30': {'guns': 4}, '45+': {'guns': 4, 'firearm': 1}, 
                '30-45': {'guns': 3, 'cutting': 3}}, 
                
                'WA': {'<16': {'guns': 6, 'firearm': 4, 'cutting': 1}, 
                '45+': {'guns': 24, 'firearm': 5, 'personal': 5}, 
                '17-30': {'guns': 40, 'firearm': 15, 'cutting': 10}, 
                '30-45': {'guns': 28, 'firearm': 15, 'personal': 7}}, 
                
                'WI': {'<16': {'guns': 7, 'firearm': 2, 'blunt': 1}, 
                '30-45': {'guns': 26, 'firearm': 19, 'blunt': 3}, 
                '17-30': {'guns': 42, 'firearm': 25, 'cutting': 6}, 
                '45+': {'firearm': 12, 'guns': 9, 'cutting': 6}}, 
                
                'WV': {'17-30': {'guns': 7, 'firearm': 7}, 
                '45+': {'guns': 10, 'cutting': 2, 'firearm': 1}, 
                '30-45': {'guns': 9, 'firearm': 4, 'cutting': 4}}, 
                
                'WY': {'17-30': {'guns': 2, 'firearm': 1}, 
                '30-45': {'guns': 6, 'cutting': 2}, 
                '45+': {'guns': 5, 'cutting': 1}}}

export default SimData;