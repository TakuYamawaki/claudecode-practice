/**
 * 会社情報検索アプリケーション
 */

// DOM要素
const companyInput = document.getElementById('company-input');
const searchBtn = document.getElementById('search-btn');
const suggestionsDiv = document.getElementById('suggestions');
const resultsDiv = document.getElementById('results');
const resultsContainer = document.getElementById('results-container');
const noResultsDiv = document.getElementById('no-results');

// URLテンプレート
const URLS = {
    // Yahoo!ファイナンス - 株価情報
    stockPrice: (code) => `https://finance.yahoo.co.jp/quote/${code}.T`,

    // 国税庁 法人番号公表サイト
    corporateInfo: (number) => `https://www.houjin-bangou.nta.go.jp/henkorireki-johoto.html?selHouzinNo=${number}`,

    // EDINET - 有価証券報告書等
    edinet: (code) => `https://disclosure2.edinet-fsa.go.jp/WEEK0010.aspx?searchstr=${code}`
};

/**
 * 会社名で検索
 * @param {string} query - 検索クエリ
 * @returns {Array} - マッチした会社のリスト
 */
function searchCompanies(query) {
    if (!query || query.trim() === '') {
        return [];
    }

    const normalizedQuery = query.trim().toLowerCase();

    return companyData.filter(company => {
        // 正式名称で検索
        if (company.name.toLowerCase().includes(normalizedQuery)) {
            return true;
        }

        // 略称・別名で検索
        if (company.shortNames.some(name => name.toLowerCase().includes(normalizedQuery))) {
            return true;
        }

        return false;
    });
}

/**
 * サジェストを表示
 * @param {Array} companies - 会社リスト
 */
function showSuggestions(companies) {
    if (companies.length === 0) {
        hideSuggestions();
        return;
    }

    suggestionsDiv.innerHTML = companies.map(company => `
        <div class="suggestion-item" data-name="${escapeHtml(company.name)}">
            <div class="company-name">${escapeHtml(company.name)}</div>
            <div class="company-code">${company.stockCode ? `証券コード: ${company.stockCode}` : '非上場'}</div>
        </div>
    `).join('');

    suggestionsDiv.classList.remove('hidden');

    // サジェストアイテムのクリックイベント
    suggestionsDiv.querySelectorAll('.suggestion-item').forEach(item => {
        item.addEventListener('click', () => {
            companyInput.value = item.dataset.name;
            hideSuggestions();
            performSearch();
        });
    });
}

/**
 * サジェストを非表示
 */
function hideSuggestions() {
    suggestionsDiv.classList.add('hidden');
    suggestionsDiv.innerHTML = '';
}

/**
 * 検索結果を表示
 * @param {Array} companies - 会社リスト
 */
function showResults(companies) {
    if (companies.length === 0) {
        resultsDiv.classList.add('hidden');
        noResultsDiv.classList.remove('hidden');
        return;
    }

    noResultsDiv.classList.add('hidden');
    resultsDiv.classList.remove('hidden');

    resultsContainer.innerHTML = companies.map(company => createCompanyCard(company)).join('');
}

/**
 * 会社カードのHTMLを生成
 * @param {Object} company - 会社データ
 * @returns {string} - HTML文字列
 */
function createCompanyCard(company) {
    const stockCodeLink = company.stockCode
        ? `<a href="${URLS.stockPrice(company.stockCode)}" target="_blank" rel="noopener noreferrer" class="code-value">${company.stockCode}</a>`
        : `<span class="code-value disabled">なし</span>`;

    const corporateNumberLink = company.corporateNumber
        ? `<a href="${URLS.corporateInfo(company.corporateNumber)}" target="_blank" rel="noopener noreferrer" class="code-value">${formatCorporateNumber(company.corporateNumber)}</a>`
        : `<span class="code-value disabled">なし</span>`;

    const edinetCodeLink = company.edinetCode
        ? `<a href="${URLS.edinet(company.edinetCode)}" target="_blank" rel="noopener noreferrer" class="code-value">${company.edinetCode}</a>`
        : `<span class="code-value disabled">なし</span>`;

    return `
        <div class="company-card">
            <h3>${escapeHtml(company.name)}</h3>
            <div class="code-list">
                <div class="code-item">
                    <span class="code-label">証券コード</span>
                    ${stockCodeLink}
                </div>
                <div class="code-item">
                    <span class="code-label">法人番号</span>
                    ${corporateNumberLink}
                </div>
                <div class="code-item">
                    <span class="code-label">EDINETコード</span>
                    ${edinetCodeLink}
                </div>
            </div>
        </div>
    `;
}

/**
 * 法人番号をフォーマット（4-4-4-1形式）
 * @param {string} number - 13桁の法人番号
 * @returns {string} - フォーマットされた法人番号
 */
function formatCorporateNumber(number) {
    if (!number || number.length !== 13) {
        return number;
    }
    return `${number.slice(0, 1)}-${number.slice(1, 5)}-${number.slice(5, 9)}-${number.slice(9, 13)}`;
}

/**
 * HTMLエスケープ
 * @param {string} str - エスケープする文字列
 * @returns {string} - エスケープされた文字列
 */
function escapeHtml(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
}

/**
 * 検索を実行
 */
function performSearch() {
    const query = companyInput.value;
    const results = searchCompanies(query);
    hideSuggestions();
    showResults(results);
}

/**
 * 結果をリセット
 */
function resetResults() {
    resultsDiv.classList.add('hidden');
    noResultsDiv.classList.add('hidden');
    resultsContainer.innerHTML = '';
}

// イベントリスナー

// 検索ボタンクリック
searchBtn.addEventListener('click', performSearch);

// Enterキーで検索
companyInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        performSearch();
    }
});

// 入力時にサジェスト表示
let debounceTimer;
companyInput.addEventListener('input', () => {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
        const query = companyInput.value;
        if (query.length >= 1) {
            const suggestions = searchCompanies(query).slice(0, 5);
            showSuggestions(suggestions);
        } else {
            hideSuggestions();
        }
    }, 150);
});

// フォーカスが外れたらサジェストを非表示（少し遅延させてクリックを受け付ける）
companyInput.addEventListener('blur', () => {
    setTimeout(hideSuggestions, 200);
});

// ドキュメントクリックでサジェストを閉じる
document.addEventListener('click', (e) => {
    if (!companyInput.contains(e.target) && !suggestionsDiv.contains(e.target)) {
        hideSuggestions();
    }
});

// 初期状態
resetResults();
